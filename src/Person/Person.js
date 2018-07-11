import React from 'react';


const Person = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}> I am {props.name} and i am {props.age} years old {props.children} </p>
        {/* <p>{props.click}</p> */}
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
export default Person;