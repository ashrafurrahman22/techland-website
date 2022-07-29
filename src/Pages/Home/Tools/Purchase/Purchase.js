import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useProductDetail from '../../../../Hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import purchase from '../../../../assets/img/purchase.png';


const Purchase = () => {

  const [user] = useAuthState(auth);

  // const [orderedQuantity, setOrderedQuantity]  = useState({})

    const {productId} = useParams();
    const [data, setData] = useProductDetail(productId);

    const {name, img, price, description, available, minOrderQuantity} = data;
    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();
    

    useEffect(()=>{
        reset({'order': parseInt(minOrderQuantity)})
    }, [minOrderQuantity])

    const handlePurchase = (event) =>{

      fetch('https://ancient-ocean-57727.herokuapp.com/purchase', {
        method : "POST", 
        headers : {
          'content-type' : 'application/json'
        },
        body :JSON.stringify(event)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('You Successfully Ordered this product')
        console.log(data)
        reset();
      } )

    }

    return (
        <div style={{fontFamily:"aleo"}} className='mx-auto lg:max-w-xl text-black sm:max-w-sm'>
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
<label for="my-modal" class="btn modal-button">Purchase <img src={purchase} className='w-6 rounded-xl' alt="" /></label>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <label for='my-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
    <h3 class="font-bold text-lg">Fill Up this form</h3>
    <div class="w-full max-w-xl">
        <div className="grid grid-cols-1 gap-3 justify-items-center">


        <form onSubmit={handleSubmit(handlePurchase)}>
        <label class="label">
    <span class="label-text">Product Name</span>
  </label>
        <input value={name} type="text" name='product' class="input input-bordered w-full max-w-xs cursor-not-allowed"
        {...register("productName")} required
        />

        <label class="label">
    <span class="label-text">Name</span>
  </label>
        <input value={user?.displayName} type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs cursor-not-allowed" 
        {...register("name")} required
        />
        <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" name='email' value={user?.email} class="input input-bordered w-full max-w-xs cursor-not-allowed"
  {...register("email")}
  required />
        <label class="label">
    <span class="label-text">Address</span>
  </label>
  <input type="text" name='address' placeholder='Your Address' class="input input-bordered w-full max-w-xs" 
  {...register("address")} required
  />
        <label class="label">
    <span class="label-text">Phone Number</span>
  </label>
  <input type="text" name='phone' placeholder='Contact' class="input input-bordered w-full max-w-xs" 
  {...register("phone")} required
  />
        <label class="label">
    <span class="label-text">Available Quantity</span>
  </label>
  <input type="text" value={available}  class="input input-bordered w-full max-w-xs cursor-not-allowed"
  {...register("available")} 
  />
  
        <label class="label">
    <span class="label-text">Order Quantity</span>
  </label>
  <input type="number" class="input input-bordered w-full max-w-xs" {...register("order",  { min:{
      value: parseInt(minOrderQuantity),
      message: 'Order Should be equal or bigger than minimum Order Quantity' 
    }, 
    max: {
      value: parseInt(available),
      message: 'Order Should be less than available quantity' // JS only: <p>error message</p> TS only support string
    } })} required />
  {errors?.order && <p className='text-sm'><span className='text-pink-500'>{errors?.order.message}</span></p>}
        <label class="label">
    <span class="label-text">Price Per Quantity</span>
  </label>
  <input type="text" value={price}  class="input input-bordered w-full max-w-xs cursor-not-allowed" {...register("price")} />
  <input type="submit" value='Order' class="input input-bordered w-full max-w-xs cursor-pointer my-3" />
  
        
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