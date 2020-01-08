import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';
import Aux from '../../../HOC/Aux';
import styled from 'styled-components';
import AuthContext from '../../../context/auth-context';

const StyledDiv = styled.div `
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {

  static contextType = AuthContext;


  render () {
    return (
      <Aux >
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log In</p>}
        <p onClick = {this.props.click}> I 'm {this.props.name} and I am {this.props.age} years old!</p> 
        <p> {this.props.children} </p> 
        <input type = "text" onChange = {this.props.changed}
        value = {this.props.name}
        /> 
    </Aux>
    )
  }
}
Person.propTypes = {
  click: PropTypes.func, 
  name: PropTypes.string, 
  age: PropTypes.number, 
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);