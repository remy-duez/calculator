import React from 'react';

// function component that will display something when result is over 9000
const ItSOverNineThousand = ({triggered}) => {
    return (
        <h3>
            {triggered}
        </h3>
    );
};

export default ItSOverNineThousand;