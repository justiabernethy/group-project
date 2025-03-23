let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Node.js Project</h1>
    <p>This is a sample node.js project. You can add more routes and controllers as needed.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
