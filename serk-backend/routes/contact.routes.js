const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');
const authMiddleware = require('../middleware/auth.middleware');

const sanitize = (str) => String(str || '').replace(/[<>]/g, '').trim().slice(0, 2000);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact — public
router.post('/', async (req, res) => {
  const { name, email, company, service, budget, timeline, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Name, email, service, and message are required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (message.length < 20) {
    return res.status(400).json({ error: 'Message must be at least 20 characters.' });
  }

  try {
    const contact = await Contact.create({
      name:     sanitize(name),
      email:    sanitize(email),
      company:  sanitize(company),
      service:  sanitize(service),
      budget:   sanitize(budget),
      timeline: sanitize(timeline),
      message:  sanitize(message),
      ip:       req.ip
    });

    console.log(`New contact: ${contact.name} <${contact.email}> — ${contact.service}`);
    res.status(200).json({ message: 'Message received. We will be in touch within 24 hours.' });
  } catch (err) {
    console.error('Contact save error:', err.message);
    res.status(500).json({ error: 'Failed to submit. Please try again or email us directly.' });
  }
});

// GET /api/contact — protected, admin only
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status && status !== 'all' ? { status } : {};
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [submissions, total] = await Promise.all([
      Contact.find(filter).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit)),
      Contact.countDocuments(filter)
    ]);

    res.json({ submissions, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch submissions.' });
  }
});

// PATCH /api/contact/:id/status — protected, admin only
router.patch('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' });
    }
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!contact) return res.status(404).json({ error: 'Submission not found.' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status.' });
  }
});

// DELETE /api/contact/:id — protected, admin only
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete.' });
  }
});

module.exports = router;
