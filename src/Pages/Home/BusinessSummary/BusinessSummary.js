import React from 'react';
import bgSummary from '../../../assets/img/bg-summary.png';

const BusinessSummary = () => {
    return (
        <div className='my-14 bg-purple-100 rounded-xl p-10'>
            <h2 className='text-center font-bold uppercase text-3xl my-6'>Business Summary</h2>
            <div style={{
            background: `url(${bgSummary})`,
            backgroundSize: 'cover'
        }} className='grid lg: grid-cols-4 gap-6'>
                <div className='text-center'>
                <h2 className="text-3xl font-bold ">77+</h2>
                <p>Countries</p>
                </div>
                <div className='text-center'>
                <h2 className="text-3xl font-bold ">332+</h2>
                <p>Completed Project</p>
                </div>
                <div className='text-center'>
                <h2 className="text-3xl font-bold ">284+</h2>
                <p>Happy Clients</p>
                </div>

                <div className='text-center'>
                <h2 className="text-3xl font-bold ">394+</h2>
                <p>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;