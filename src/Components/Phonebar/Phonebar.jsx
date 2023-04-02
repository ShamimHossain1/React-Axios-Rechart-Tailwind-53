import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Phonebar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data
                // console.log(loadedData)
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;

                })
                // console.log(phonesData);
                setPhones(phonesData);
            })
    }, [])


    return (
        <div className='border border-cyan-400 w-2/3 mx-auto my-10 rounded-lg p-5 '>
            {/* <ResponsiveContainer> */}

            <BarChart
                width={1200}
                height={300}
                data={phones}
            >

                <Bar dataKey='price' fill="red" ></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Cell></Cell>
                <Tooltip></Tooltip>
                <Legend></Legend>


            </BarChart>
            {/* </ResponsiveContainer> */}






        </div>
    );
};

export default Phonebar;