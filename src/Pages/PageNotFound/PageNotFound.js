import React from 'react';
import errorImg from '../../assets/img/404-error.jpg';

const PageNotFound = () => {
    return (
        <div className='my-6'>
            <img className='rounded-xl lg:max-w-full sm:max-w-sm' src={errorImg} alt="" />
        </div>
    );
};

export default PageNotFound;