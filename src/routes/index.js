const express = require('express');
const path = require('path');
const router = express.Router();

const projectRoutes = require('./projectRoutes');
const contactRoutes = require('./contactRoutes');
const systemRoutes = require('./systemRoutes');

const publicDir = path.join(__dirname, '..', '..', 'public');

// Backward compatibility redirects (clean URLs)
router.get('/jnanesh.html', (req, res) => res.redirect('/'));
router.get('/resume.html', (req, res) => res.redirect('/resume'));

// Page routes
router.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));
router.get('/resume', (req, res) => res.sendFile(path.join(publicDir, 'resume.html')));

// API Sub-routes
router.use('/api/projects', projectRoutes);
router.use('/api/contact', contactRoutes);
router.use('/api/system', systemRoutes);

module.exports = router;
