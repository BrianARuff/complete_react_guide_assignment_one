import React from 'react';
import './UserOutput'

const userOutput = (props) => {

    const style = {
        color: '#fff'
    }

    return (
        <div style={style} >
            <p> {props.name} </p>
            <p> {props.children} </p>
        </div>
    )
};

export default userOutput;