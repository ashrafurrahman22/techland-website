import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const {id} = useParams();

    return (
        <div>
            <h2 className='text-xl text-center'>This is payment route</h2>
            <h2>{id}</h2>
        </div>
    );
};

export default Payment;