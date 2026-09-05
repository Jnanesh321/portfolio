const systemService = require('../services/systemService');

class SystemController {
  getStatus(req, res) {
    const status = systemService.getSystemStatus();
    res.json({
      success: true,
      ...status
    });
  }
}

module.exports = new SystemController();
