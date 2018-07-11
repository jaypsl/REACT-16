import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">I am a React Developer</h1>
        <Person name="jay" age="25"/>
        <Person name="kay" age="26"> -  I am an investment banker</Person>
        <Person name="may" age="29"/>
       </div>
    );

    // return React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'i am a react developer'));
  }
}

export default App;


