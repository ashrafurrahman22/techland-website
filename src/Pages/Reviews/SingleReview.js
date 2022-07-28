import React from 'react';

const SingleReview = (props) => {

    const {name, email, ratings, review} = props.review;

    return (
        <div style={{fontFamily:"Raleway", letterSpacing:"0px"}}>
           <div class="card bg-base-100 text-black shadow-xl">
  <div class="card-body">
    <h2 class="text-2xl font-bold text-center">{name}</h2>
    <h4 class="card-title">{email}</h4>
    <h4 class="card-title">Ratings : {ratings}</h4>

    <p>{review}</p>
  </div>
</div>
        </div>
    );
};

export default SingleReview;