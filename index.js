var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello');
=======
 res.send('hello world');
>>>>>>> 81cc62a2b3bca35b6e6ca46ccae7552481ee4ccb
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
