import React from 'react';
import lazy from '../../images/lazy.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>404</h2>
            <img className='w-100' src={lazy} alt="" />
        </div>
    );
};

export default NotFound;