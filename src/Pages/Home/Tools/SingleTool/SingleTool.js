import React from 'react';
import { useNavigate } from 'react-router-dom';
import purchase from '../../../../assets/img/purchase.png';

const SingleTool = ({product}) => {

    const {name,img, description, price} = product;

    const navigate = useNavigate();

    const navigateToProductDetails = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div style={{fontFamily:"aleo"}}>
            <div class="card card-compact  bg-base-100 text-black shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <h4 class="card-title">Price : ${price}</h4>
    <button className='btn'>Buy Now</button>
  </div>
</div>

        </div>
    );
};

export default SingleTool;