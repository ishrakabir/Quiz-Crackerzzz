import React, { useContext } from 'react';
import { openContext } from '../../App';

const Blog = () => {
    const [open] = useContext(openContext);
    return (
        <div className={`${open || 'mt-32'}`}>
            <h1>This is Blog</h1>
        </div>
    );
};

export default Blog;