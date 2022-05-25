import React from 'react';
import customer from '../../../assets/img/customer-icon.png';
import revenue from '../../../assets/img/revenue-icon.png';
import tools from '../../../assets/img/tools-icn.png';
import reviews from '../../../assets/img/reviews-icn.png';


const BusinessSummary = () => {
    return (
        <div className='my-14 bg-purple-100 rounded-xl p-10'>
            <h2 className='text-center font-bold uppercase text-3xl my-6'>Business Summary</h2>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-6'>
                <div className='text-center'>
                    <img src={customer} alt="" className="w-14 mx-auto" />
                <h2 className="text-3xl font-bold ">77K+</h2>
                <p>Customers</p>
                </div>
                <div className='text-center'>
                <img src={revenue} alt="" className="w-14 mx-auto" />
                <h2 className="text-3xl font-bold ">132M+</h2>
                <p>Annual Revenue</p>
                </div>
                <div className='text-center'>
                <img src={tools} alt="" className="w-14 mx-auto" />
                <h2 className="text-3xl font-bold ">100+</h2>
                <p>Tools</p>
                </div>

                <div className='text-center'>
                <img src={reviews} alt="" className="w-14 mx-auto" />
                <h2 className="text-3xl font-bold ">12k+</h2>
                <p>Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;