var {
    app
} = require('./app'); // define our app

var port = 3000; // set our port
app.listen(port, () => {
    console.log('Magic happens on port: ' + port);
})