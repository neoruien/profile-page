import React from 'react';
import './style.css';

const TextBox = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default TextBox