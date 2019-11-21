import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <label for="username">Username: </label>
      <input type="text" onChange={props.userChange} value={props.username} name="username"/>
      <label for="password">Password: </label>
      <input type="text" onChange={props.passChange} value={props.pasword} name="password"/>
    </div>
  )
};

export default UserInput;