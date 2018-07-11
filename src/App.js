import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name : 'jay', age : 25},
      {name : 'kay', age : 26},
      {name : 'may', age : 29}
    ]

  }

  changeNameHandler = (newName) => {
    // console.log('clicked');
    this.setState({
      persons : [
        {name : newName, age : 25},
        {name : 'kay', age : 26},
        {name : 'maysolanki', age : 30}
  
      ]
    })
    
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">I am a React Developer</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click = {this.changeNameHandler.bind(this, 'jaysolanki')} name={this.state.persons[1].name} age={this.state.persons[1].age}> -  I am an investment banker</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={(event) => this.changeNameHandler('jaysahani')}>Change Name</button>
       </div>
    );

    // return React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'i am a react developer'));
  }
}

export default App;


