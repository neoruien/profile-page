import React from 'react';
import './style.css';

const Post = (props) => {
    return (
        <div className="post">
            {props.children}
        </div>
    )
}

export default Post