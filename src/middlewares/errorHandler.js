function notFoundHandler(req, res) {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ success: false, error: `API route not found: ${req.originalUrl}` });
  }

  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>404 — Page Not Found</title>
      <style>
        body { background: #090d13; color: #e8edf3; font-family: 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
        h1 { font-size: 5rem; margin: 0; color: #38bdf8; }
        p { color: #7d8b9f; margin: 1rem 0 2rem; }
        a { color: #090d13; background: #38bdf8; text-decoration: none; padding: 0.8rem 1.6rem; border-radius: 4px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div>
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">← Return to Portfolio</a>
      </div>
    </body>
    </html>
  `);
}

function errorHandler(err, req, res, next) {
  console.error('🔥 Server Error:', err);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
}

module.exports = {
  notFoundHandler,
  errorHandler
};
