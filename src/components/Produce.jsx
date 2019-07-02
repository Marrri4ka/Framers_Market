import React from 'react';
import PropTypes from 'prop-types';


function Produce(props){
  return (<td>

    <h4>{props.month}</h4>

  <ul>{props.selection.map((myselection, index) => <li>{myselection}</li>)}</ul>

    </td>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
}

export default Produce;
