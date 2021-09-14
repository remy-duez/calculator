import React from 'react';
import "./ClearButton.css";

const ClearButton = ({operator, handleClearClick}) => {
    return (
        <div>
            <button className="clear_button" onClick={() =>handleClearClick(operator)}>{operator}</button>
        </div>
    );
};

export default ClearButton;