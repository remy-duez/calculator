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

/**
 * This component will contain every other components that are used
 * in calculation and rendering the calculator.
 */
const Calculator = () => {

  //we set the different states for calculation, result, and the over9000 trigger.
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");
  const [trigger, setTrigger] = useState("");

  //here, useEffect is used to watch the render of result and act accordingly
  useEffect(() => {
    let prevResult = result;
    // we check if there is a previous result existing and if so, we set calculation to be the last known result
    if(prevResult){
      setCalculation(prevResult.toString());
    }
    //if the last known result is over 9000 it triggers de useState of ItsOverNineThousand component
    if(prevResult > 9000){
      setTrigger("It's Over 9000 !");
    }else{
      setTrigger("");
    }
  }, [result]);

  // this method adds the clicked button value to the calculation variable
  const addToCalculation = (value) => {
    let prevCalculation = calculation;
    /**
     * here, if calculation is empty and the value is not a number OR 
     * if the last occuration of calculation string is not a number and value is not a number 
     * we do not do anything to avoid errors or multiple operators.
    */
    if (
      (isNaN(value) && prevCalculation === "") ||
      (isNaN(prevCalculation.slice(-1)) && isNaN(value))
    ) {
      return;
    }
    //the clicked value is added to the calculation.
    setCalculation(prevCalculation => prevCalculation += value)

  };

  //this method clears BeautifulScreen and ItsOverNineThousand components states.
  const clearCalculation = () => {
    setCalculation("");
    setResult("");
    setTrigger("");
  };

  //this method uses mathjs to evaluate the calculation of the string given by the calculation hook. 
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
