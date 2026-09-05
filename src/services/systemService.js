const config = require('../config');
const projectService = require('./projectService');

class SystemService {
  getSystemStatus() {
    const uptimeSeconds = Math.floor((Date.now() - config.serverStartTime) / 1000);
    const totalCheers = projectService.getTotalCheers();
    const totalProjects = projectService.getTotalCount();

    // Formatted IST time (Asia/Kolkata)
    const now = new Date();
    const options = {
      timeZone: config.timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const istTime = new Intl.DateTimeFormat('en-IN', options).format(now);

    return {
      status: 'ONLINE',
      server: config.appName,
      environment: 'Node.js ' + process.version,
      uptimeSeconds,
      istTime: `${istTime} (IST)`,
      location: config.location,
      totalProjects,
      totalCheers
    };
  }
}

module.exports = new SystemService();
