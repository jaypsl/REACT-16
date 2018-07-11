import React from 'react';

const Person = (props) => {
    return (
        <div>
        <p onClick={props.click}> I am {props.name} and i am {props.age} years old {props.children} </p>
        {/* <p>{props.click}</p> */}
        </div>
    )
}
export default Person;