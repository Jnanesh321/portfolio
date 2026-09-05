function validateContact(req, res, next) {
  const { name, email, message } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Please provide a valid name.' });
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Please provide a message.' });
  }

  next();
}

module.exports = validateContact;
