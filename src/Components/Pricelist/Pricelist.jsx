import React, { useEffect, useState } from 'react';
import Pricecard from '../Pricecard/Pricecard';

const Pricelist = () => {
    const [price, setPrice] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrice(data))
    }, [])
    return (
        <div className='md:px-96 px-20'>
            <h2 className='md:text-5xl text-2xl font-bold text-center mt-5 md:mb-12'>Amazing Offers</h2>
            <div className='grid md:grid-cols-3 gap-3 text-center  '>
                {
                    price.map((price, idx) => <Pricecard
                        key={idx}
                        price={price}
                    ></Pricecard>)
                }
            </div>

        </div>
    );
};

export default Pricelist;