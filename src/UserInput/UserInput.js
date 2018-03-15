import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    return (
        <div>
            <p>Type in Name</p>
            <input className='userInput' type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
};

export default userInput;