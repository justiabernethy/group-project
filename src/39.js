const express = require('express');
const app = express();

app.use(express.json());

// Example route
app.post('/api/users', (req, res) => {
  const user = req.body;
  // Add your user data here
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
