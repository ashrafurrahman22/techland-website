import React from 'react';
import useReview from '../../../Hooks/useReview';
import SingleReview from '../../Reviews/SingleReview';

const LatestReview = () => {
    const [reviews] = useReview();
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>Reviews</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
            {
                reviews.slice(-3).map(review => 
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

export default LatestReview;