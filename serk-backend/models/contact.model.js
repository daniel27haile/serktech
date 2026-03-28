const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true, maxlength: 200 },
    email:    { type: String, required: true, trim: true, lowercase: true, maxlength: 300 },
    company:  { type: String, trim: true, maxlength: 200 },
    service:  { type: String, required: true, trim: true, maxlength: 300 },
    budget:   { type: String, trim: true, maxlength: 100 },
    timeline: { type: String, trim: true, maxlength: 100 },
    message:  { type: String, required: true, trim: true, maxlength: 5000 },
    status:   { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
    ip:       { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
