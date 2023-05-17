import React, { useState } from 'react';
import Links from '../Links/Links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(true);
    const routes = [
        { path: '/', name: 'Topics', id: 1 },
        { path: '/statistics', name: 'Statistics', id: 2 },
        { path: '/blog', name: 'Blog', id: 3 },
    ]
    return (
        <nav className='md:m-10 m-3 '>
            <div className='h-6 w-6 md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open?<Bars3Icon></Bars3Icon>:<XMarkIcon></XMarkIcon>
               }
            </div>
            <ul className='md:flex md:items-center justify-between text-black text-2xl font-semibold '>
                <div className='invisible md:visible'>
                    <h1>Quiz Crackers</h1>
                </div>
                <div className={`md:flex absolute sm:justify-center w-8/12 md:w-96 md:static duration-1000 ${open ? 'top-[-420px]':'top-6'}`}>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </div>
            </ul>
        </nav>
    );
};

export default Header;