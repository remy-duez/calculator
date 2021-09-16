import React from 'react';
import "./AmazingNumberButton.css";

// function component to display and use number buttons on the calculator component
const AmazingNumberButton = ({number, handleClick}) => {

    return (
            <button className="number_button" onClick={() =>handleClick(number)}>{number}</button>
        );
};

export default AmazingNumberButton;