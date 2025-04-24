// Generate a random Node.js code snippet
var fs = require('fs');
var path = require('path');

// Read in JSON data from file
var jsonData = fs.readFileSync(path.join(__dirname, 'data.json'), { encoding: 'utf8' });

// Parse the JSON data
var parsedData = JSON.parse(jsonData);

// Perform some operations using the parsed data
console.log(parsedData);
