import React from "react";
import useProducts from '../../../Hooks/useProducts';
import SingleTool from "../Tools/SingleTool/SingleTool";

const LatestProducts = () => {

  const [products] = useProducts();

  return (
    <div style={{ fontFamily: "aleo" }} className="my-10 text-black">
      <h3 className="text-3xl my-5 text-white font-semibold text-center uppercase">
        Latest Phones
      </h3>
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
