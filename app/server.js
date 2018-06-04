/*var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('/src/app/models/todoListModel'),
  bodyParser = require('body-parser');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('/src/app/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful weatherPrefixAPI');
console.log('Server started on: ' + port);

*/


// server.
var express        = require('express'),
    bodyParser     = require('body-parser'),
    app            = express(),
    port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
require('/src/app/routes/weatherRoutes')(app, {});


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful WeatherPrefixAPI');
console.log('Server started on: ' + port);