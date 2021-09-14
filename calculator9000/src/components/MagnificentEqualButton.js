import React from 'react';

const MagnificentEqualButton = ({operator, handleEqualClick}) => {
    return (
        <button className="magnificent_equal_button" onClick={() =>handleEqualClick(operator)}>=</button>
    );
};

export default MagnificentEqualButton;