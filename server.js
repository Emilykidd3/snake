var express = require('express');
const PORT = 3001;
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/FOLDERTOHTMLFILESTOSERVER')));

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);