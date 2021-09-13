import React from 'react';
import AmazingNumberButton from '../components/AmazingNumberButton';
import BeautifullScreen from '../components/BeautifullScreen';
import GreatOperationButton from '../components/GreatOperationButton';
import MagnificentEqualButton from '../components/MagnificentEqualButton';

const Calculator = () => {
    return (
        <div className="calculator">
            <BeautifullScreen />
            <AmazingNumberButton />
            <MagnificentEqualButton />
            <GreatOperationButton />
        </div>
    );
};

export default Calculator;