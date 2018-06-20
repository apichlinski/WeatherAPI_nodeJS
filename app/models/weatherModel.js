/*
// Constructor & Properties Object (Using option A)
module.exports = class WeatherModel{
  constructor(weatherResponse){
        // weather_state_name
      if ( weatherResponse.weather_state_name )
        this.weather_status = weatherResponse.weather_state_name;
      else
        this.weather_status = 'Not Available';
      
      //temp_in_night
      if ( weatherResponse.min_temp )
        this.temp_in_night = weatherResponse.min_temp;
      else
        this.temp_in_night = 'Not Available';

      // temp_in_day
      if ( weatherResponse.max_temp )
        this.temp_in_day = weatherResponse.max_temp;
      else
        this.temp_in_day = 'Not Available';

      // current_temp
      if ( weatherResponse.the_temp )
        this.current_temp = weatherResponse.the_temp;
      else
        this.current_temp = 'Not Available';

      // Return properties
      return {
        weather_status: weather_status,
        temp_in_night: temp_in_night,
        temp_in_day: temp_in_day,
        current_temp: current_temp
      };
  };

}
*/



/*
var WeatherModel = function() {};
module.exports = WeatherModel;

var WeatherModel = class WeatherModel {   
};

module.exports.WeatherModel = WeatherModel;

*/

/*
class WeatherModel {
   constructor()
   {
     this.user_name=null;
     this.user_surname=null;
     this.user_age=null;
   }
   /*
   name(user_name) {
     this.user_name=user_name;
     return this;
   }

   surname(user_surname) {
     this.user_surname=user_surname;
     return this;
   }

   age(user_age) {
     this.user_age=user_age;
     return this;
   }

   get(callback) {

     var list ={};

     list.uname=this.user_name;
     list.usurname=this.user_surname;
     list.uage=this.user_age;

     callback(list);
   }

}
module.exports = WeatherModel;*/


function WeatherModel(weatherResponse) {
    // weather_state_name
    if ( weatherResponse.weather_state_name )
        this.weather_status = weatherResponse.weather_state_name;
    else
        this.weather_status = 'Not Available';

    //temp_in_night
    if ( weatherResponse.min_temp )
        this.temp_in_night = weatherResponse.min_temp;
    else
        this.temp_in_night = 'Not Available';

    // temp_in_day
    if ( weatherResponse.max_temp )
        this.temp_in_day = weatherResponse.max_temp;
    else
    this.temp_in_day = 'Not Available';

    // current_temp
    if ( weatherResponse.the_temp )
        this.current_temp = weatherResponse.the_temp;
    else
        this.current_temp = 'Not Available';

}
//  Sets the Person object to module.exports
// 
module.exports = WeatherModel;