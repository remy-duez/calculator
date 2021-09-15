import React from "react";
import "./Calculator.css";
import * as math from "mathjs";
import { useState, useEffect } from "react";
import AmazingNumberButton from "../components/AmazingNumberButton";
import BeautifulScreen from "../components/BeautifulScreen";
import GreatOperationButton from "../components/GreatOperationButton";
import MagnificentEqualButton from "../components/MagnificentEqualButton";
import ItSOverNineThousand from "../components/ItSOverNineThousand";
import ClearButton from "../components/ClearButton";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");
  const [trigger, setTrigger] = useState("");
  useEffect(() => {
    let prevResult = result;
    if(prevResult){
      setCalculation(prevResult.toString());
    }
    if(prevResult > 9000){
      setTrigger("It's Over 9000 !");
    }else{
      setTrigger("");
    }
  }, [result]);


  const addToCalculation = (value) => {
    let prevCalculation = calculation;

    if (
      (isNaN(value) && prevCalculation === "") ||
      (isNaN(prevCalculation.slice(-1)) && isNaN(value))
    ) {
      return;
    }

    setCalculation(prevCalculation => prevCalculation += value)

  };

  const clearCalculation = () => {
    setCalculation("");
    setResult("");
    setTrigger("");
  };


  const calculateResult = () => {
    try {
      setResult(math.evaluate(calculation.concat("")));
    } catch (error) {}
  };

  return (
    <div className='calculator'>
      <BeautifulScreen result={result} calculation={calculation} />
      <ItSOverNineThousand trigger={trigger}/>
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
