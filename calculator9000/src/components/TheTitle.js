import React from 'react';
import "./TheTitle.css";

// function component that will be the title 
const TheTitle = ({title}) => {
    return (
        <h1 className="title">
            {title}
        </h1>
    );
};

export default TheTitle;