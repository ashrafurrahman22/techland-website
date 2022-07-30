import React from 'react';

const SingleReview = (props) => {

    const {name, review} = props.review;

    return (
        <div style={{fontFamily:"aleo", letterSpacing:"1px"}}>
            <div className='card card-body bg-base-200 h-3/3 text-black text-center my-3'>
          <h2 style={{fontFamily:"Aleo"}} className='text-xl font-bold mt-3'> {name}  </h2>
          <p className='text-left'>{review}</p>
        </div>
  </div>
// </div>
        // </div>
    );
};

export default SingleReview;