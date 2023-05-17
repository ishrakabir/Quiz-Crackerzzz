import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({route}) => {
    return (
        <li className='md:mr-12 py-2'><Link to={route.path}>{route.name}</Link></li>
    );
};

export default Links;