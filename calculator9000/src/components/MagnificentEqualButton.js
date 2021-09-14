import React from 'react';
import "./MagnificentEqualButton.css";

const MagnificentEqualButton = ({operator, handleEqualClick}) => {
    return (
        <button className="magnificent_equal_button" onClick={() =>handleEqualClick(operator)}>=</button>
    );
};

export default MagnificentEqualButton;