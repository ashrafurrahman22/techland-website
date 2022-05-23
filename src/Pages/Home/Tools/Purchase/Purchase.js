import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useProductDetail from '../../../../Hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';


const Purchase = () => {

  const [user] = useAuthState(auth);

    const {productId} = useParams();
    const [data] = useProductDetail(productId);

    const {name, img, price, description, available, minOrderQuantity} = data;


    const handleSubmit = event =>{
      event.preventDefault();
    }

    return (
        <div className='mx-auto lg:max-w-xl sm:max-w-sm'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-5 pt-5">
    <img src={img} alt="Shoes" class="rounded-xl max-w-sm" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <div className='text-left my-3'>
    <p className='text-left'><small>{description}</small></p>
    </div>
    <div class="card-actions">
<label for="my-modal" class="btn modal-button">Purchase</label>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <label for='my-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
    <h3 class="font-bold text-lg">Fill Up this form</h3>
    <div class="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-3 justify-items-center">
        <form onSubmit={handleSubmit}>
        <label class="label">
    <span class="label-text">Name</span>
  </label>
        <input type="text" placeholder="Your Name" disabled readOnly value={user?.displayName} class="input input-bordered w-full max-w-xs" />
        <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" placeholder="Your Name" disabled readOnly value={user?.email} class="input input-bordered w-full max-w-xs" />
        <label class="label">
    <span class="label-text">Address</span>
  </label>
  <input type="text" placeholder='Your Address' class="input input-bordered w-full max-w-xs" />
        <label class="label">
    <span class="label-text">Available Quantity</span>
  </label>
  <input type="text" value={available} readOnly disabled class="input input-bordered w-full max-w-xs" />
        <label class="label">
    <span class="label-text">Order Quantity</span>
  </label>
  <input type="text" value={minOrderQuantity} class="input input-bordered w-full max-w-xs" />
        <label class="label">
    <span class="label-text">Price Per Quantity</span>
  </label>
  <input type="text" value={price} disabled readOnly class="input input-bordered w-full max-w-xs" />
        <input className='btn my-3' type="submit" value='Order' class="input input-bordered w-full max-w-xs cursor-pointer" />
        </form>
        </div>
</div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Purchase;