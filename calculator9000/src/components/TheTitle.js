import React from 'react';
import "./TheTitle.css";

const TheTitle = ({title}) => {
    return (
        <h1 className="title">
            {title}
        </h1>
    );
};

export default TheTitle;