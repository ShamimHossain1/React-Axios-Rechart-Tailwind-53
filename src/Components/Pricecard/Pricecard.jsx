import React from 'react';
import Feature from '../Feature/Feature';

const Pricecard = (props) => {
    const {name, price, features} = props.price;
    return (
        <div className='bg-purple-900 mt-4 rounded-xl p-12 md:mx-10  shadow-2xl flex flex-col items-center'>
            <h5 className='text-purple-400 text-2xl font-bold'>{name}</h5>
            <h6>
            <span className='md:text-5xl text-3xl font-bold text-white'>{price}</span>
            <span className='md:text-xl font-semibold text-white'>/m</span>
            </h6>
            <p className='md:text-xl font-semibold text-red-500'>Features:</p>
            <div className='my-4'>
            {
                features.map((feature, idx) => <Feature
                feature={feature}
                key={idx}></Feature>)
            }
            </div>
            <button className=' bg-green-400 p-2 text-lg font-semibold rounded-md mt-auto items-center'>Purchase</button>
        </div>
    );
};

export default Pricecard;