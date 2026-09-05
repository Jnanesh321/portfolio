const express = require('express');
const path = require('path');
const config = require('./config');
const routes = require('./routes');
const requestLogger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Standard Request Parsers & Logger Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Serve static assets from public/ directory
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// Mount application routes
app.use(routes);

// Error Handling Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

// Start server if executed directly
if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`🚀 ${config.appName} running on port ${config.port}`);
    console.log(`📍 Server Location: ${config.location}`);
    console.log(`📄 Portfolio: http://localhost:${config.port}/`);
    console.log(`📄 Resume:    http://localhost:${config.port}/resume`);
    console.log(`⚡ API:       http://localhost:${config.port}/api/projects`);
  });
}

module.exports = app;
