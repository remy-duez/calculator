import React from 'react';
import AmazingNumberButton from '../components/AmazingNumberButton';
import BeautifullScreen from '../components/BeautifullScreen';
import GreatOperationButton from '../components/GreatOperationButton';
import MagnificentEqualButton from '../components/MagnificentEqualButton';
import { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
    const [result, setResult] = useState("");
    const [calculation, setCalculation] = useState("");

    const addToCalculation = (value) => {
        if(
            (isNaN(value) && calculation === "") ||
            (isNaN(value) && calculation.includes(value,-1))

        ){
            return;
        }
        setCalculation((calculation) => [...calculation, value]);
    }

    const clearCalculation = () =>{
        setCalculation("");
        setResult("");
    }

    const calculateResult = () =>{
        setResult(math.evaluate(calculation.join("")));
    }

    return (
        <div className="calculator">
            <BeautifullScreen result={result} calculation={calculation}/>
            <AmazingNumberButton number="9" handleClick={addToCalculation}/>
            <AmazingNumberButton number="8" handleClick={addToCalculation}/>
            <AmazingNumberButton number="7" handleClick={addToCalculation}/>
            <AmazingNumberButton number="6" handleClick={addToCalculation}/>
            <AmazingNumberButton number="5" handleClick={addToCalculation}/>
            <AmazingNumberButton number="4" handleClick={addToCalculation}/>
            <AmazingNumberButton number="3" handleClick={addToCalculation}/>
            <AmazingNumberButton number="2" handleClick={addToCalculation}/>
            <AmazingNumberButton number="1" handleClick={addToCalculation}/>
            <AmazingNumberButton number="0" handleClick={addToCalculation}/>
            <AmazingNumberButton number="." handleClick={addToCalculation}/>
            <GreatOperationButton operator="+"  handleOperatorClick={addToCalculation}/>
            <GreatOperationButton operator="-"  handleOperatorClick={addToCalculation}/>
            <GreatOperationButton operator="/"  handleOperatorClick={addToCalculation}/>
            <GreatOperationButton operator="*"  handleOperatorClick={addToCalculation}/>
            <GreatOperationButton operator="C"  handleOperatorClick={clearCalculation}/>
            <MagnificentEqualButton operator="=" handleEqualClick={calculateResult}/>
        </div>
    );
};

export default Calculator;