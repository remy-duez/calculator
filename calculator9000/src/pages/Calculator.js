import React from "react";
import AmazingNumberButton from "../components/AmazingNumberButton";
import BeautifulScreen from "../components/BeautifulScreen";
import GreatOperationButton from "../components/GreatOperationButton";
import MagnificentEqualButton from "../components/MagnificentEqualButton";
import { useState } from "react";
import * as math from "mathjs";
import ClearButton from "../components/ClearButton";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [calculation, setCalculation] = useState("");

  const addToCalculation = (value) => {
    if (
      (isNaN(value) && calculation === "") ||
      (isNaN(value) && calculation.includes(value, -1))
    ) {
      return;
    }
    setCalculation((calculation) => [...calculation, value]);
  };

  const clearCalculation = () => {
    setCalculation("");
    setResult("");
  };

  const calculateResult = () => {
    setResult(math.evaluate(calculation.join("")));
  };

  return (
    <div className='calculator'>
      <BeautifulScreen result={result} calculation={calculation} />
      <div className='buttons'>
        <div className='row'>
          <AmazingNumberButton number='9' handleClick={addToCalculation} />
          <AmazingNumberButton number='8' handleClick={addToCalculation} />
          <AmazingNumberButton number='7' handleClick={addToCalculation} />
          <GreatOperationButton
            operator='+'
            handleOperatorClick={addToCalculation}
          />
        </div>
        <div className='row'>
          <AmazingNumberButton number='6' handleClick={addToCalculation} />
          <AmazingNumberButton number='5' handleClick={addToCalculation} />
          <AmazingNumberButton number='4' handleClick={addToCalculation} />
          <GreatOperationButton
            operator='-'
            handleOperatorClick={addToCalculation}
          />
        </div>
        <div className='row'>
          <AmazingNumberButton number='3' handleClick={addToCalculation} />
          <AmazingNumberButton number='2' handleClick={addToCalculation} />
          <AmazingNumberButton number='1' handleClick={addToCalculation} />
          <GreatOperationButton
            operator='/'
            handleOperatorClick={addToCalculation}
          />
        </div>
        <div className='row'>
          <AmazingNumberButton number='.' handleClick={addToCalculation} />
          <AmazingNumberButton number='0' handleClick={addToCalculation} />
          <ClearButton operator='C' handleClearClick={clearCalculation} />
          <GreatOperationButton
            operator='*'
            handleOperatorClick={addToCalculation}
          />
        </div>

        <div className='clear_button'>
          
          <MagnificentEqualButton
            operator='='
            handleEqualClick={calculateResult}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
