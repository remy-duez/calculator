import React from 'react';

const AmazingNumberButton = ({number, handleClick}) => {

    /*function generateDigits(){
        let digits = [];
        for(let i=9; i>=0; i--){
            digits.push(<button className="number_button" key={i}>{i}</button>);
        }
        return digits;
    }*/

    return (
            <button className="number_button" onClick={() =>handleClick(number)}>{number}</button>
        );
};

export default AmazingNumberButton;