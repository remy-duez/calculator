import React from 'react';

function generateOperationButtons(){
    let operators = ["+", "-", "/", "*"] ;
    let operation_buttons = [];

    for(let i=0; i< operators.length; i++){
        operation_buttons.push(<button className="great_operations_button">{operators[i]}</button>);
    }
    return operation_buttons;
}

const GreatOperationButton = () => {
    return (
        <div className="great_operations_buttons">{generateOperationButtons()}</div>
    );
};

export default GreatOperationButton;