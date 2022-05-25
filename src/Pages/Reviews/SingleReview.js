import React from 'react';

const SingleReview = (props) => {

    const {name, email, ratings, review} = props.review;

    return (
        <div>
           <div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-center">{name}</h2>
    <h4 class="card-title">{email}</h4>
    <h4 class="card-title">Ratings : {ratings}</h4>

    <p>{review}</p>
  </div>
</div>
        </div>
    );
};

export default SingleReview;