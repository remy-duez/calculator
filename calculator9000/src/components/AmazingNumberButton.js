import React from 'react';

function generateDigits(){
    let digits = [];
    for(let i=9; i>=0; i--){
        digits.push(<button className="number_button" key={i}>{i}</button>);
    }
    return digits;
}

const AmazingNumberButton = () => {
    return (
        <div className="number_buttons">{generateDigits()}</div>
        );
};

export default AmazingNumberButton;