import React, { useContext } from 'react';
import { openContext } from '../../App';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const [open] = useContext(openContext);
    const datas = useLoaderData();
    const data = datas.data;
   

    return (
        <div className={`${open || 'mt-32'} mt-10 md:mt-40`}>
          
            <ResponsiveContainer width="90%" height={400}>
            <BarChart  width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis dataKey="total"></YAxis>
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8"></Bar>
                </BarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default Statistics;