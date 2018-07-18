import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons : [
      {id: 0, name : 'jay', age : 25},
      {id: 1, name : 'kay', age : 26},
      {id: 2, name : 'may', age : 29}
    ],
    otherState : 'other value',
    showPersons : false

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  // changeNameHandler = (newName) => {
  //   // console.log('clicked');
  //   this.setState({
  //     persons : [
  //       {name : newName, age : 25},
  //       {name : 'kay', age : 26},
  //       {name : 'maysolanki', age : 30}
  
  //     ]
  //   })
    
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  
  nameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    
    this.setState({
      persons : persons
      //  [
      //   {name : 'jay', age : 25},
      //   {name : event.target.value, age : 26},
      //   {name : 'maysolanki', age : 30}
  
      // ]
    })
  }

  render() {

    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid black',
      padding : '8px',
      cursor : 'pointer ',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){

      persons = ( 
      
      <div>
        {this.state.persons.map((person, index) => {
          return <Person key={person.id}
          click = {() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          changed = {(event) => this.nameHandler(event, person.id)}/>
        })}

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click = {this.changeNameHandler.bind(this, 'jaysolanki')} name={this.state.persons[1].name} age={this.state.persons[1].age} changed = {this.nameHandler}> -  I am an investment banker</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div>);
           
           style.backgroundColor = 'red';
           style[':hover'] = {
             backgroundColor : 'yellow',
             color : 'black'
           } 
    }

    // let classes = ['red', 'italic'].join(' ');
    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1 className="App-title">REACT BASICS</h1>
        <p className={classes.join(' ')}>Is it working?</p>
        {persons}
        
          <br/>
        {/* <button style = {style} onClick={(event) => this.changeNameHandler('jaysahani')}>Change Name</button> */}
        <button style = {style} onClick={this.togglePersonHandler}>Change Name</button>
       
       </div>
      //   </StyleRoot> 

    );

    // return React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'i am a react developer'));
  }
}

// export default Radium(App);
export default App;

