import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import SingleTool from './SingleTool/SingleTool';

const Tools = () => {

    const [products] = useProducts();

    return (
        <div className='my-5'>
            <h2 className="text-xl text-center font-bold uppercase">Computer Parts</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>   
            {
                products.slice(0, 6).map(product => <SingleTool
                key={product._id}
                product = {product}
                ></SingleTool> )
            }
            </div>
        </div>
    );
};

export default Tools;