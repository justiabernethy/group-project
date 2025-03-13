const express = require('express');
const app = express();

// Set the port number
const port = process.env.PORT || 3000;

// Define routes for the API
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
