import React from 'react';
import "./ClearButton.css";

// function component to display and use the clear button on the calculator component
const ClearButton = ({operator, handleClearClick}) => {
    return (
            <button className="clear_button" onClick={() =>handleClearClick(operator)}>{operator}</button>
    );
};

export default ClearButton;