import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {

  state = {
    persons : [
      {name : 'jay', age : 25},
      {name : 'kay', age : 26},
      {name : 'may', age : 29}
    ],
    otherState : 'other value',
    showPersons : false

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
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

  nameHandler = (event, newName) => {
    this.setState({
      persons : [
        {name : newName, age : 25},
        {name : event.target.value, age : 26},
        {name : 'maysolanki', age : 30}
  
      ]
    })
  }

  render() {

    const style = {
      backgroundcolor : 'white',
      font : 'inherit',
      border : '1px solid black',
      padding : '8px',
      cursor : 'pointer '
    }

    let people = null;

    if(this.state.showPersons){
      people = ( 
      
      <div>
        {this.state.persons.map(person => {
          return <Person name={person.name} age={person.age}/>
        })}

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click = {this.changeNameHandler.bind(this, 'jaysolanki')} name={this.state.persons[1].name} age={this.state.persons[1].age} changed = {this.nameHandler}> -  I am an investment banker</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div>);
               
    }

    return (
      <div className="App">
        <h1 className="App-title">REACT BASICS</h1>
        {people}
        
          <br/>
        {/* <button style = {style} onClick={(event) => this.changeNameHandler('jaysahani')}>Change Name</button> */}
        <button style = {style} onClick={this.togglePersonHandler}>Change Name</button>
       
       </div>
    );

    // return React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'i am a react developer'));
  }
}

export default App;


