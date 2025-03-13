const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to CI/CD Jenkins Lab!');
});

app.get('/about', (req, res) => {
  res.json({ author: "Joseph", project: "CI/CD Lab 2" });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT = 3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
