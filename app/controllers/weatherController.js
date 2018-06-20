'use strict';

//Task = mongoose.model('Tasks');
var unirest = require('unirest')

exports.getWeatherByCityName = function(req, res) {
  var req_city = req.query['city'] || 'default';
  var req_email = req.query['email'] || 'default';

  var Cities = [
        { id: "2459115",  name: "new york"}, 
        { id: "44418",    name: "london"}
    ];

  var city = exports.findObjectByKey(Cities, 'name', req_city.toLowerCase());
  var dateFormat = require('dateformat');
  var now = new Date();
  var formatted = dateFormat(now, "yyyy/mm/dd");

  if (city && exports.validateEmail(req_email)) {
    unirest.get('https://www.metaweather.com/api/location/'+city.id+'/'+formatted)
      .headers({'Content-Type': 'multipart/form-data'})
      .end(function(result) {
        if (result.error) {
          res.status(400).send({ message: 'GET error! ' + result.error});
          return false;
        } else {
          var current_weather = result.body[0];
          var weatherResponseObject = { 
            weather_status: current_weather.weather_state_name, 
            pressure:       current_weather.air_pressure, 
            humidity:       current_weather.humidity, 
            visibility:     current_weather.visibility, 
            temp_in_night:  current_weather.min_temp,
            temp_in_day:    current_weather.max_temp,
            current_temp:   current_weather.the_temp,
            current_date:   current_weather.created,
          };
          res.status(200).json( 
            weatherResponseObject
          );
        }
    });
  } else {
     res.status(400).send({ message: 'invalid city or email address!'});
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