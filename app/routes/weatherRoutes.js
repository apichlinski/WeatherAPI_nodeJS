'use strict';

module.exports = function(app) {
	var weatherController = require('../controllers/weatherController');
    
    app.route('/weather') //friendly url app.route('/weather/:city/:email')
        .get(weatherController.getWeatherByCityName);
};
