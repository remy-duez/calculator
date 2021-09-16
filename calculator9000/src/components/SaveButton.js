import React from 'react';
import "./SaveButton.css";

const SaveButton = ({value, handleSaveCLick}) => {
    return (
        <button className="save_button" onClick={handleSaveCLick}>{value}</button>
    );
};

export default SaveButton;