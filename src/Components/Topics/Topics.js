import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../../Topic/Topic';
import { openContext } from '../../App';

const Topics = () => {
    const topics = useLoaderData();
    const datas = topics.data;
    const [open] = useContext(openContext);
    return (
        <div className={`grid xxl:grid-cols-4 xl:grid-cols-3 justify-items-center xs:grid-cols-1 sm:grid-cols-2 gap-4 ${open || 'mt-32'} transition  duration-1500`}>
            {
                datas.map(data => <Topic key={data.id} data={data}></Topic>)
            }
        </div>
    );
};

export default Topics;