var express = require('express'); // call express
var app = express(); // define our app using express

// ROUTES FOR OUR API
var {
    route
} = require('./routes/data');
app.use('/file', route);
module.exports = {
    app
};