import React from 'react';
import "./MagnificentEqualButton.css";


//function component for the equal button that will be displayed and used in calculator
const MagnificentEqualButton = ({operator, handleEqualClick}) => {
    return (
        <button className="magnificent_equal_button" onClick={() =>handleEqualClick(operator)}>=</button>
    );
};

export default MagnificentEqualButton;