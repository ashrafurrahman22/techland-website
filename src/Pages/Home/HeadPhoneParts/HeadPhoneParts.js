import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import SingleTool from '../Tools/SingleTool/SingleTool';

const HeadPhoneParts = () => {

  const [products] = useProducts();


    return (
        <div style={{fontFamily:"aleo", letterSpacing:"2px"}} className='my-16 text-black'>
            <h2 className='text-3xl my-12 font-semibold text-white text-center uppercase'>Popular HeadPhones</h2>
            

            <div className='lg:grid lg:grid-cols-4 sm:grid-cols-1 gap-8'>

              {
                products.slice(9, 13).map(product => <SingleTool
                key={product._id}
                product = {product}
                ></SingleTool> )
            }
            </div>
        </div>
    );
};

export default HeadPhoneParts;