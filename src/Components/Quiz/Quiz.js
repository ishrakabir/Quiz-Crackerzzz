import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { openContext } from '../../App';

const Quiz = () => {
    const [open] = useContext(openContext);
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    let cnt = 0;
    return (
        <div className={`${open || ' mt-32'} flex flex-col items-center `}>
            <div className='mb-10'>
                <h1 className='text-purple-700 text-2xl font-bold '>Quiz of {quiz.data.name}</h1>
                <p className='text-slate-400'>(You Can Select Multiple Options)</p>
            </div>
            {
                questions.map(ques => <Questions key={ques.id} ques={ques} cnt={++cnt}></Questions>)
            }
        </div>
    );
};

export default Quiz;