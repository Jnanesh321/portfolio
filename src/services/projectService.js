const projectsData = require('../data/projectsData');

class ProjectService {
  getAllProjects() {
    return projectsData.map(p => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      category: p.category,
      status: p.status,
      theme: p.theme,
      overview: p.overview,
      techStack: p.techStack,
      cheers: p.cheers
    }));
  }

  getProjectById(id) {
    if (!id) return null;
    return projectsData.find(p => p.id.toLowerCase() === id.toLowerCase()) || null;
  }

  cheerProject(id) {
    const project = this.getProjectById(id);
    if (!project) return null;
    project.cheers += 1;
    return {
      id: project.id,
      title: project.title,
      cheers: project.cheers
    };
  }

  getTotalCheers() {
    return projectsData.reduce((acc, p) => acc + (p.cheers || 0), 0);
  }

  getTotalCount() {
    return projectsData.length;
  }
}

module.exports = new ProjectService();
