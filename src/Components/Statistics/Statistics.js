import React, { useContext } from 'react';
import { openContext } from '../../App';

const Statistics = () => {
    const [open] = useContext(openContext);
    return (
        <div className={`${open || 'mt-32'}`}>
            <h1>This is Statistics</h1>
        </div>
    );
};

export default Statistics;