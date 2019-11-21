import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: '',
    textLength: 0,
    valid: false,
    characters: []
  };

  handleChange = (e) =>{
    let validity;
    const textlen = e.target.value.length;
    const chars = e.target.value.split('');

    if (textlen >= 5) {
      validity = true;
    } else {
      validity = false;
    }
    
    
    this.setState({
      inputText: e.target.value,
      textLength: textlen,
      valid: validity,
      characters: chars,
      displayText: e.target.value
    });
  };

  handleRemoveCharacter = (i) => {
    const charList = this.state.inputText.split('');
    charList.splice(i,1);
    const newString = charList.join('');
    this.setState({inputText: newString, characters: charList});
  };


  render() {
    let checkValid = null;
    if (this.state.valid) {
      checkValid = (
        <Validation value="This string is long Enough"></Validation>
      );
    } else {
      checkValid = (
        <Validation value="This string is too short"></Validation>
      );
    };

    let charDisplay = null;
    if (this.state.textLength) {
      charDisplay = (
        <div>
          {this.state.characters.map((char, index) => {
            return <Char value={char} 
                         index={index}
                         remove={() => this.handleRemoveCharacter(index)}>        
            </Char>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} value={this.state.inputText}></input>
        {checkValid}
        {charDisplay}
      </div>
    )
  };
};

export default App;
