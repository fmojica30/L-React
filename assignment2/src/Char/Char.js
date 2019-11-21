import React from 'react';
import './Char.css';

const char = (props) => {
  return (
    <h3 className="character" onClick={props.remove}>{props.value}</h3>
  )
};

export default char