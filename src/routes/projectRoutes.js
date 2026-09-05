const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET /api/projects - list all projects with themes and summaries
router.get('/', (req, res) => projectController.getProjects(req, res));

// GET /api/projects/:id - get detailed architecture and specs
router.get('/:id', (req, res) => projectController.getProjectById(req, res));

// POST /api/projects/:id/cheer - increment cheers/kudos for a project
router.post('/:id/cheer', (req, res) => projectController.cheerProject(req, res));

module.exports = router;
