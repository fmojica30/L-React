import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.userChange} value={props.username}/>
      <input type="text" onChange={props.passChange} value={props.pasword} />
    </div>
  )
};

export default UserInput;