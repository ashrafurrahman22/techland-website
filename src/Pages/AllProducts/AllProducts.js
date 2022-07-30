import React from 'react';
import useProducts from '../../Hooks/useProducts';
import SingleTool from '../Home/Tools/SingleTool/SingleTool';

const AllProducts = () => {

    const [products] = useProducts();

    return (
        <div style={{fontFamily:"aleo", letterSpacing:"2px"}} className='my-5'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>   
        {
            products.map(product => <SingleTool
            key={product._id}
            product = {product}
            ></SingleTool> )
        }
        </div>
    </div>
    );
};

export default AllProducts;