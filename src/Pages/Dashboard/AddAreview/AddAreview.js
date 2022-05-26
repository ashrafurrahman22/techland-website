import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddAreview = () => {

    const [user]  = useAuthState(auth);
    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();

    const hanldeReview = event =>{

      if(event.ratings > 5 || event.ratings < 1){
          alert('ratings should be under 1 to 5')
      }
      else{
        console.log(event);
        fetch('https://ancient-ocean-57727.herokuapp.com/review', {
          method : "POST", 
          headers : {
            'content-type' : 'application/json'
          },
          body :JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('You Successfully added a review')
          console.log(data)
          reset();
        } )

      }
      
    }

    return (
        <div>
            <h2 className='uppercase text-3xl text-center font-semibold my-2'>add a review</h2>
            <div className='grid grid-cols-1 gap-6 justify-items-center'>
            <form onSubmit={handleSubmit(hanldeReview)}>
        <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" placeholder="Your Name"  class="input input-bordered w-full max-w-xs mb-2" {...register("name")} required />
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" placeholder="Your email" readOnly value={user?.email} class="input input-bordered w-full max-w-xs mb-2 cursor-not-allowed" {...register("email")} />
  <label class="label">
    <span class="label-text">Ratings</span>
  </label>
  <input type="number" placeholder="Your ratings" class="input input-bordered w-full max-w-xs mb-2" {...register("ratings")} required/>
  <label class="label">
    <span class="label-text">Review</span>
  </label>
  <textarea type="text" placeholder="Write Your Review Here" class="input input-bordered w-full max-w-xs mb-2" {...register("review")} required />
        <input className=' btn  my-3' type="submit" value='Add Review' class="input input-bordered w-full max-w-xs cursor-pointer mx-auto" />
        </form>
            </div>
        </div>
    );
};

export default AddAreview;