const contactService = require('../services/contactService');

class ContactController {
  submitContact(req, res) {
    const { name, email, subject, message } = req.body;
    const response = contactService.processContactMessage({ name, email, subject, message });
    res.json(response);
  }
}

module.exports = new ContactController();
