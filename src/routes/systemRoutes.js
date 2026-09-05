const express = require('express');
const router = express.Router();
const systemController = require('../controllers/systemController');

// GET /api/system - get server status, uptime, and system metrics
router.get('/', (req, res) => systemController.getStatus(req, res));

module.exports = router;
