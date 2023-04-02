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
        <div className='border border-cyan-400 md:w-2/3 md:mx-auto my-10 rounded-lg md:p-5 p-3 mx-3 '>
            <ResponsiveContainer width='100%' height={400}>

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
            </ResponsiveContainer>






        </div>
    );
};

export default Phonebar;