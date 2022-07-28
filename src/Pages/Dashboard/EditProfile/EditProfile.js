import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const EditProfile = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const handleEdit = event =>{
        console.log(event);
    }

    return (
        <div style={{fontFamily:"inter"}}  className='p-6 rounded-xl'>
            <h2 className="text-2xl font-bold uppercase text-center">Edit Your Profile</h2>
                <hr />
            {/* form */}
            <div>
            <form onSubmit={handleSubmit(handleEdit)}>

        <label class="label">
    <span class="label-text text-white">Name</span>
  </label>
        <input type="text" name='name' value={user?.displayName} placeholder="Your Name" class="input input-bordered w-full max-w-xs" 
        {...register("name")} required
        />
        <label class="label">
    <span class="label-text text-white">Email</span>
  </label>
  <input type="email" name='email' placeholder='Your Email' class="input input-bordered w-full max-w-xs"
  {...register("email")}
  required />
        <label class="label">
    <span class="label-text text-white">Address</span>
  </label>
  <input type="text" name='address' placeholder='Your Address' class="input input-bordered w-full max-w-xs" 
  {...register("address")} required
  />
        <label class="label">
    <span class="label-text text-white">Phone Number</span>
  </label>
  <input type="text" name='phone' placeholder='Contact' class="input input-bordered w-full max-w-xs" 
  {...register("phone")} required
  />
        <label class="label">
    <span class="label-text text-white">Study:</span>
  </label>
  <input type="text" name='phone' placeholder='Your Study Position' class="input input-bordered w-full max-w-xs" 
  {...register("study")} required
  />
   <label class="label">
    <span class="label-text text-white">Submit</span>
  </label>
  <input type="submit" value='Update' class="input btn text-blue-900 input-bordered w-full max-w-xs cursor-pointer" />
  
        
        </form>
            </div>
        </div>
    );
};

export default EditProfile;