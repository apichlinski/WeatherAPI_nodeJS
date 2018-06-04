'use strict';

//Task = mongoose.model('Tasks');
var unirest = require('unirest')

require("../config/citiesList.js")

exports.getWeatherByCityName = function(req, res) {
  var req_city = req.query['city'] || 'default';
  var req_email = req.query['email'] || 'default';

  var Cities = [
        { id: "2459115",  name: "new york"}, 
        { id: "44418",    name: "london"}
    ];

  var city = exports.findObjectByKey(Cities, 'name', req_city.toLowerCase());
  
  if (city && exports.validateEmail(req_email)) {
     unirest.get('https://www.metaweather.com/api/location/'+city.id)
      .end(function(result) {
        if (result.error) {
          res.status(400).send({ message: 'GET error! ' + result.error});
          return false;
        } else {
          res.status(200).json( result.body );   
        }
    });
  } else {
     res.status(400).send({ message: 'invalid request!'});
  }
};

exports.findObjectByKey = function(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
          return array[i];
      }
  }
  return null;
}

// Validate email - params - email - string
exports.validateEmail = function(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}