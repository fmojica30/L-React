import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Fernando',
    password: '414702'
  };

  usernameChangeHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  };

  passwordChangeHandler = (event) => {
    this.setState( {
      password: event.target.value
    });
  };

  render() {
    const style = {
      backgroundColor: 'blue',
      margin: 'auto',
      borderRadius: '10px'
    };

    return (
      <div>
        <UserInput userChange={this.usernameChangeHandler.bind(this)} passChange={this.passwordChangeHandler.bind(this)} username={this.state.username} password={this.state.password}>

        </UserInput>
        <UserOutput style={style} username={this.state.username} password={this.state.password}>

        </UserOutput>
      </div>
    );
  }
};

export default App;
