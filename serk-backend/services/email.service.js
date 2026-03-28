const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

const sendContactEmail = async (data) => {
  const { name, email, company, service, budget, timeline, message } = data;

  const transporter = createTransporter();

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #06b6d4; font-size: 1.5rem; margin: 0;">New Contact Form Submission</h1>
        <p style="color: #94a3b8; margin: 8px 0 0;">Serk Technologies Website</p>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #94a3b8; width: 140px; vertical-align: top; font-size: 0.875rem;">Name</td>
          <td style="padding: 10px 0; color: #e2e8f0; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #94a3b8; vertical-align: top; font-size: 0.875rem;">Email</td>
          <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
        </tr>
        ${company ? `<tr>
          <td style="padding: 10px 0; color: #94a3b8; vertical-align: top; font-size: 0.875rem;">Company</td>
          <td style="padding: 10px 0; color: #e2e8f0;">${company}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 10px 0; color: #94a3b8; vertical-align: top; font-size: 0.875rem;">Service</td>
          <td style="padding: 10px 0; color: #e2e8f0;">${service}</td>
        </tr>
        ${budget ? `<tr>
          <td style="padding: 10px 0; color: #94a3b8; vertical-align: top; font-size: 0.875rem;">Budget</td>
          <td style="padding: 10px 0; color: #e2e8f0;">${budget}</td>
        </tr>` : ''}
        ${timeline ? `<tr>
          <td style="padding: 10px 0; color: #94a3b8; vertical-align: top; font-size: 0.875rem;">Timeline</td>
          <td style="padding: 10px 0; color: #e2e8f0;">${timeline}</td>
        </tr>` : ''}
      </table>
      <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
        <p style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Message</p>
        <p style="color: #e2e8f0; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
        <p style="color: #64748b; font-size: 0.8125rem; margin: 0;">Reply directly to this email to respond to ${name}.</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Serk Technologies Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `New Inquiry from ${name} – ${service}`,
    html
  });
};

const sendAutoReply = async (data) => {
  const { name, email, service } = data;

  const transporter = createTransporter();

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
      <h1 style="color: #06b6d4; font-size: 1.5rem; margin: 0 0 8px;">Thanks for reaching out, ${name}.</h1>
      <p style="color: #94a3b8; margin: 0 0 24px; font-size: 1rem;">I've received your message and will get back to you within 24 hours.</p>
      <div style="padding: 20px; background: rgba(6,182,212,0.07); border: 1px solid rgba(6,182,212,0.2); border-radius: 8px; margin-bottom: 24px;">
        <p style="margin: 0; color: #e2e8f0; font-size: 0.9375rem;">You inquired about: <strong style="color: #06b6d4;">${service}</strong></p>
      </div>
      <p style="color: #94a3b8; line-height: 1.75; margin: 0 0 16px;">In the meantime, feel free to browse my portfolio or services at <a href="https://serktech.com" style="color: #06b6d4;">serktech.com</a>.</p>
      <p style="color: #94a3b8; line-height: 1.75; margin: 0 0 24px;">If you need to reach me directly: <a href="mailto:contact@serktech.com" style="color: #06b6d4;">contact@serktech.com</a></p>
      <p style="color: #64748b; font-size: 0.875rem; margin: 0;">— Serk Technologies</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Serk Technologies" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'I received your message – Serk Technologies',
    html
  });
};

module.exports = { sendContactEmail, sendAutoReply };
