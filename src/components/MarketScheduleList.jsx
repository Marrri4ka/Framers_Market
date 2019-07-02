import React from 'react';
import MarketSchedule from './MarketSchedule';

function MarketScheduleList(){
  let styling = {
    backgroundColor: '#0984e3'
  }
  const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];
  return (
    <table class="table">
    <thead>
    <tr style={styling}>
    <th >Day</th>
    <th>Location</th>
    <th>Hours</th>
    <th>Booth</th>
    <th></th>
    </tr>
    </thead>
<tbody>
    {marketSchedule.map((market,index)=>
          <MarketSchedule day={market.day} location= {market.location} hours={market.hours} booth={market.booth}/>
    )  }
    </tbody>
    </table>
  );
}




export default MarketScheduleList;
