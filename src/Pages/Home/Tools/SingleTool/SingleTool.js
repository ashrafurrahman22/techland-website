import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({product}) => {

    const {name,img, description, available, minOrderQuantity, price} = product;

    const navigate = useNavigate();

    const navigateToProductDetails = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-5 pt-5">
    <img src={img} alt="Shoes" class="rounded-xl max-w-sm" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <div className='text-left my-3'>
    <p className='text-left'><small>{description}</small></p>
    <h4 className='text-sm font-bold my-2'>Available Quantity :{available} psc</h4>
    <h4 className='text-sm font-bold my-1'>Minimum Order: {minOrderQuantity} psc</h4>
    <h3 className='text-xl font-bold'>Price: ${price}</h3>
    </div>
    <div class="card-actions">
      <button onClick={()=>navigateToProductDetails(product._id)} class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleTool;