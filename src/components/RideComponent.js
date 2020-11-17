import React from "react";
import moment from "moment";
import 'moment-duration-format';

function List(props) {
  const rides = props.RIDES;
  var i_rides = Array.from({length: rides.length}, (x, i) => i);

  function message_alert(i_ride){
    //ride duration, in the hh:mm:ss format as well as the end time of the ride.
    var duration_alert=moment.duration(rides[i_ride].duration,"seconds").format("hh:mm:ss");
    var end_time_alert=moment.utc(Date.parse(rides[i_ride].startTime)+rides[i_ride].duration*1000).format();
    return duration_alert+'-'+end_time_alert
  };
  
  function price(i_ride){
    var additional_price;
    var time_in_hr_for_add_price=moment.utc(rides[i_ride].startTime).format("HH");
   if (time_in_hr_for_add_price>16 && time_in_hr_for_add_price<19){ //1 EURadditional for busy periods between 4PM and 7PM
   additional_price=1;
   }else if (time_in_hr_for_add_price>20 || time_in_hr_for_add_price<6){//0.50 EUR additional EUR between 8PM and 6AM
    additional_price=0.5;
   } else{
    additional_price=0;
   };
    return 1 + rides[i_ride].distance*2.50+additional_price;
  }
      
  function clicked(i_button){
    document.getElementsByTagName("span")[i_button].innerHTML = "Clicked";
  };

  return (
    <ul>{i_rides.map((i_ride) => 
      <div  className={(rides[i_ride].distance>2) ? 'background-red' : 'background-blue'}><h2> ride ID = {rides[i_ride].id} <span></span></h2> price= {price(i_ride)} EUR
          <button id="button" onClick={() => clicked(i_ride) & alert(message_alert(i_ride)) }>Click
          </button>
      </div>)}
    </ul>
  );
}

export default List


