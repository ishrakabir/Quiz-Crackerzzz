import React, { useContext } from 'react';
import { openContext } from '../../App';

const Blog = () => {
    const [open] = useContext(openContext);
    return (
        <div className={`${open || 'mt-32'} border rounded-lg border-gray-300 p-4 shadow-2xl text-lg md:text-2xl text-purple-500 font-semibold text-left mx-10 md:mx-0`}>
            <h1 className='my-10'><span className='text-black font-bold'>Title : </span> Mastering React.js: A Journey into Building Modern Web Applications</h1>
            <h1 className='my-10'><span className='text-black font-bold'>Introduction : </span>
                React.js has revolutionized the way developers build user interfaces for web applications. It is a powerful and popular JavaScript library that enables developers to create dynamic and interactive UI components. In this blog post, we will delve into the world of React.js and explore its key features, benefits, and best practices for building robust web applications.</h1>
            <h1 className='my-10'><span className='text-black font-bold'>Conclusion : </span>
                React.js has transformed the way developers approach web application development, offering a powerful and efficient framework for building dynamic user interfaces. By mastering React's core concepts and best practices, you can unlock the full potential of this library and create impressive web applications. Remember to always keep learning, stay updated with the React ecosystem, and leverage the vast community resources available to make the most out of React.js. Happy coding!</h1>
        </div>
    );
};

export default Blog;