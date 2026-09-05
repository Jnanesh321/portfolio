const projectService = require('../services/projectService');

class ProjectController {
  getProjects(req, res) {
    const projects = projectService.getAllProjects();
    res.json({
      success: true,
      count: projects.length,
      projects
    });
  }

  getProjectById(req, res) {
    const { id } = req.params;
    const project = projectService.getProjectById(id);

    if (!project) {
      return res.status(404).json({ success: false, error: `Project '${id}' not found.` });
    }

    res.json({
      success: true,
      project
    });
  }

  cheerProject(req, res) {
    const { id } = req.params;
    const result = projectService.cheerProject(id);

    if (!result) {
      return res.status(404).json({ success: false, error: `Project '${id}' not found.` });
    }

    res.json({
      success: true,
      message: `Cheered ${result.title}! 🔥`,
      cheers: result.cheers
    });
  }
}

module.exports = new ProjectController();
