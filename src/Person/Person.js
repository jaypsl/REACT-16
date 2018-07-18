import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const Person = (props) => {

    // const style = {
    //     '@media (min-width : 500px)' :{
    //         width : '450px'
    // }
    // };

    return (
        // <div className="Person" >
        <div className = {classes.Person}>
        <p onClick={props.click}> I am {props.name} and i am {props.age} years old {props.children} </p>
        {/* <p>{props.click}</p> */}
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
export default Person;