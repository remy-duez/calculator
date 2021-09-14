import React from 'react';
import "./GreatOperationButton.css";



const GreatOperationButton = ({operator, handleOperatorClick}) => {
    return (
        <button className="operator_button" onClick={() =>handleOperatorClick(operator)}>{operator}</button>
    );
};

export default GreatOperationButton;