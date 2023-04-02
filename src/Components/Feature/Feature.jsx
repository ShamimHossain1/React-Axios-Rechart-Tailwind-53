import React from 'react';

const Feature = (props) => {
    return (
        <div className='md:font-semibold text-white text-sm md:text-lg '>
            <li>{props.feature}</li>
        </div>
    );
};

export default Feature;