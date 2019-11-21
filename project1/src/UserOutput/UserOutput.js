import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>{props.password}</p>
    </div>
  )
};

export default UserOutput;