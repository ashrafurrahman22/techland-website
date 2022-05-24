import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddAreview = () => {

    const [user]  = useAuthState(auth);

    const handleSubmit = event =>{
        event.preventDefault();
    }

    return (
        <div>
            <h2 className='uppercase text-3xl text-center font-bold my-2'>add a review</h2>
            <div className='grid grid-cols-1 gap-6 justify-items-center'>
            <form onSubmit={handleSubmit}>
        <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" placeholder="Your Name" disabled readOnly value={user?.email} class="input input-bordered w-full max-w-xs mb-2" />
  <label class="label">
    <span class="label-text">Review</span>
  </label>
  <textarea type="text" placeholder="Write Your Review Here" class="input input-bordered w-full max-w-xs mb-2" />
        <input className=' btn  my-3' type="submit" value='Add Review' class="input input-bordered w-full max-w-xs cursor-pointer mx-auto" />
        </form>
            </div>
        </div>
    );
};

export default AddAreview;