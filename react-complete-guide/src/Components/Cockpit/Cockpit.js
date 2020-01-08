import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import { transformFile } from '@babel/core';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // const timer = setTimeout(() => {
    //   alert('Saved Data To Cloud!');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup work is in effect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] cleanup work is in effect');

    return () => {
      console.log('[Cockpit.js] cleanup work is in 2nd useEffect');
    };
  });

  const assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push('red'); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push('bold'); // classes = ['red', 'bfold']
  }

  return (
    <div className={classes.cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join( ' ' )}>This is really working!</p>
      <button
        ref = {toggleBtnRef}
        className={classes.Button}
        onClick={props.toggle}>Toggle Persons</button>
      <button onClick={authContext}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);