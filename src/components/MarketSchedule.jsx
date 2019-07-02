import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){

  let styling = {
    backgroundColor: '#fab1a0'
  }



  return(



    <tr style={styling}>
    <td>{props.day}</td>
    <td>{props.location}</td>
    <td>{props.hours}</td>
    <td>{props.booth}</td>
    <td><button className="btn btn-danger">Delete</button></td>

    </tr>

  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default MarketSchedule;
