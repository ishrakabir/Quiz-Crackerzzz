import React, { useState } from 'react';
import './Option.css'
const Option = ({ option, correctAnswer,eye }) => {
    console.log(eye, option, correctAnswer);
    let check = false;
    if (eye === true && option === correctAnswer)
        check = true;
    const [isActive, setIsActive] = useState(false);
    return (
        <div onClick={() => setIsActive(!isActive)} className={`${check &&'bg-green-300'} ${isActive ? 'bg-slate-300': 'bg-white'} border rounded-lg p-5 border-purple-500 text-purple-700 font-semibold text-lg  cursor-pointer`}>
            <h1>{option}</h1>
        </div>
    );
};

export default Option;