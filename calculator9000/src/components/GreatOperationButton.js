import React from 'react';
import "./GreatOperationButton.css";

// function component to display and use operator buttons on the calculator component
const GreatOperationButton = ({operator, handleOperatorClick}) => {
    return (
        <button className="operator_button" onClick={() =>handleOperatorClick(operator)}>{operator}</button>
    );
};

export default GreatOperationButton;