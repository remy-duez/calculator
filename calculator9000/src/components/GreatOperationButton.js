import React from 'react';



const GreatOperationButton = ({operator, handleOperatorClick}) => {

    /*function generateOperationButtons(){
        let operators = ["+", "-", "/", "*"] ;
        let operation_buttons = [];
    
        for(let i=0; i< operators.length; i++){
            operation_buttons.push(<button className="great_operations_button" key={i}>{operators[i]}</button>);
        }
        return operation_buttons;
    }*/

    return (
        <button className="great_operations_buttons" onClick={() =>handleOperatorClick(operator)}>{operator}</button>
    );
};

export default GreatOperationButton;