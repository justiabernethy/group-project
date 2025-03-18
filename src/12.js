// Create a new express server
const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
