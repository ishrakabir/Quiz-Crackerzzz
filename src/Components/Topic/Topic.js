import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Topic = ({ data }) => {
    const { id, logo, name } = data;
    // console.log(data);
    return (
        <div className=' border rounded-lg p-2 md:text-xs'>
            <img className='bg-slate-200 border rounded-lg  ' src={logo} alt="" />
            <div className='flex justify-between text-lg font-semibold text-violet-500 mt-2 items-center '>
                <p>{name}</p>
                <Link to={`/${id}`}> <button className='text-white bg-violet-500 px-3 rounded-lg'>Start Practice <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
            </div>
        </div>
    );
};

export default Topic;