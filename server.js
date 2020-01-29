const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Config
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

// Database
mongoose.connect('mongodb://localhost/bugs_life');
require('./server/config/database');

// Route
require('./server/config/routes')(app);

// Port
app.listen(8000, ()=> {
    console.log('Port 8000 is up!');
})