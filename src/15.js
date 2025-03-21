let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));

// Your routes and middleware here...
