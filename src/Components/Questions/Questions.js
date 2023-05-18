import React, { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Option from '../Option/Option';
const Questions = ({ ques,cnt }) => {
    const { correctAnswer, options, question } = ques;
    const [eye, setEye] = useState(false);

    return (
        <div className='border rounded-lg border-gray-200 shadow-lg my-5 p-6 w-full md:w-8/12 lg:6/12'>
            <div className='flex items-start justify-between px-3'>
                <h1 className='text-purple-500 text-sm sm:text-xl font-bold'>Quiz {cnt} : {question}</h1>
                <button onClick={() => setEye(!eye)}><FontAwesomeIcon className={` ${eye ? 'text-green-400' :'text-purple-500' }`} icon={faEye}></FontAwesomeIcon></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-4'>
                {
                    options.map(option=><Option option={option} correctAnswer={correctAnswer} eye={eye}></Option>)
                }        
            </div>
        </div>
    );
};

export default Questions;