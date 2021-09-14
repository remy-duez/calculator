import React from 'react';
import "./AmazingNumberButton.css";

const AmazingNumberButton = ({number, handleClick}) => {

    return (
            <button className="number_button" onClick={() =>handleClick(number)}>{number}</button>
        );
};

export default AmazingNumberButton;