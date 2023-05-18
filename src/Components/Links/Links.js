import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({route}) => {
    return (
        <li className='md:mr-12 py-2 md:py-0'><Link to={route.path}>{route.name} <hr class="w-5/12 h-[1px] mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-50"></hr></Link>
        </li>
       
    );
};

export default Links;