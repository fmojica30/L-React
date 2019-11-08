import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="UserInput">
      <p>{props.username}</p>
      <p>{props.password}</p>
    </div>
  )
};

export default UserOutput;