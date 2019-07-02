import React from 'react';
import PropTypes from 'prop-types';


function Produce(props){
  return (
    <div>
    <h4>{props.month}</h4>
<tr>
  <ul>{props.selection.map((myselection, index) => <li><td>{myselection}</td></li>)}</ul>
  </tr>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
}

export default Produce;
