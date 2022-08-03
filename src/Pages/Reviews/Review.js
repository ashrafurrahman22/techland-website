import React from 'react';
import useReview from '../../Hooks/useReview';
import SingleReview from './SingleReview';

const Review = () => {

    const [reviews] = useReview();

    return (
        <div style={{fontFamily:"inter", letterSpacing:"2px"}} className='min-h-0'>
            <h2 className='text-center mb-8 text-3xl font-semibold'>Reviews</h2>
            <hr className='mb-8' />
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
            {
                reviews.map(review => 
                <SingleReview
                key={review._id}
                review = {review}
                ></SingleReview>

                    )
            }
            </div>
        </div>
    );
};

export default Review;