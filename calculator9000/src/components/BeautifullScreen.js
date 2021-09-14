import React from 'react';

const BeautifullScreen = ({result, calculation}) => {
    return (
        <div className="beautiful_screen">
            <h3 className="result">{result}</h3>
            <h4 className="calculation">{calculation}</h4>
        </div>
    );
};

export default BeautifullScreen;