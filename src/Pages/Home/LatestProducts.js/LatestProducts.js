import React from "react";
import useProducts from '../../../Hooks/useProducts';
import SingleTool from "../Tools/SingleTool/SingleTool";

const LatestProducts = () => {

  const [products] = useProducts();

  return (
    <div style={{ fontFamily: "aleo", letterSpacing:"2px" }} className="my-10 text-black">
      <h2 className="text-2xl mt-16 text-white text-center font-medium uppercase">Latest Phones </h2>
                <div className='border-t mb-8 text-white border-base-300'> </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
      {
                products.slice(6, 9).map(product => <SingleTool
                key={product._id}
                product = {product}
                ></SingleTool> )
            }
        
      </div>
    </div>
  );
};

export default LatestProducts;
