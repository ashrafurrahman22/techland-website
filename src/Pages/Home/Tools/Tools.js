import React, { useEffect, useState } from 'react';
// import useProducts from '../../../Hooks/useProducts';
import SingleTool from './SingleTool/SingleTool';

const Tools = () => {

    // const [products] = useProducts();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div style={{fontFamily:"aleo", letterSpacing:"2px"}} className='my-5'>
            <h2 className="text-2xl my-8 text-center font-semibold uppercase">Laptop Collection</h2>
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