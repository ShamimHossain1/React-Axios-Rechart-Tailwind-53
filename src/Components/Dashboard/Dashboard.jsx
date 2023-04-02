import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        { id: 1, name: 'John', physics: 45, chemistry: 80, math: 62 },
        { id: 2, name: 'Jane', physics: 36, chemistry: 65, math: 90 },
        { id: 3, name: 'Bob', physics: 90, chemistry: 32, math: 88 },
        { id: 4, name: 'Alice', physics: 85, chemistry: 27, math: 99 },
        { id: 5, name: 'David', physics: 40, chemistry: 12, math: 100 },
        { id: 6, name: 'Sara', physics: 97, chemistry: 33, math: 10 },
        { id: 7, name: 'Tom', physics: 62, chemistry: 100, math: 24 },
        { id: 8, name: 'Emily', physics: 35, chemistry: 90, math: 37 },
        { id: 9, name: 'Mark', physics: 9, chemistry: 82, math: 40 },
        { id: 10, name: 'Anna', physics: 23, chemistry: 71, math: 58 },
        { id: 11, name: 'Alex', physics: 32, chemistry: 60, math: 65 },
        { id: 12, name: 'Jessica', physics: 40, chemistry: 57, math: 82 }
    ];

    return (
        <div className='border border-cyan-400 w-2/3 mx-auto my-10 rounded-lg p-5 '>
            {/* <ResponsiveContainer width="100%" height="100%"> */}

            <LineChart

                width={1200}
                height={400}
                data={marksArray}
            //  margin={{
            //    top: 0,
            //    right: 10,
            //    left: 20,
            //    bottom: 5,
            //  }}
            >
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="2 2" />
                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="math" stroke="blue"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>


            </LineChart>
            {/* </ResponsiveContainer> */}
            {/* <div className='flex justify-center gap-4 font-semibold'>

            <h1 className='text-red-500'>Physics</h1>
            <h1 className='text-blue-500'>Math</h1>
            <h1 className='text-green-500'>Chemistry</h1>
            </div> */}




        </div>
    );
};

export default Dashboard;