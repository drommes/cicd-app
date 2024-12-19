import express from 'express';
import path from 'path'; // Import path for file resolution
import db from './config/connection.js';
import routes from './routes/index.js';

// Initialize database connection
await db();

const PORT = process.env.PORT || 3001; // Use the environment's PORT or 3001 for local

const app = express();

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use(routes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the client/dist directory
  app.use(express.static(path.resolve(__dirname, '../client/dist')));

  // Serve the index.html file for all other routes
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`🌟 API server running on port ${PORT}!`);
});
