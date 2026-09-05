const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateContact = require('../middlewares/validateContact');

// POST /api/contact - validate and process contact message
router.post('/', validateContact, (req, res) => contactController.submitContact(req, res));

module.exports = router;
