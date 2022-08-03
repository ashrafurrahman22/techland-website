import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faLaptopFile, faSackDollar, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <div style={{fontFamily:"Aleo"}} className='my-14 card card-body bg-slate-100 text-black  rounded-xl px-10 py-6'>
        <h2 className='text-center font-bold uppercase text-3xl my-8'>Business Summary</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-6 my-5'>
            <div className='text-center'>
                <FontAwesomeIcon className='text-2xl text-red-500 my-2' icon={faUserFriends}></FontAwesomeIcon>
            <h2 className="text-3xl font-bold ">
            <CountUp 
                end={75}
                duration={6}
            />K+</h2>

           


            <p>Customers</p>
            </div>
            <div className='text-center'>
            <FontAwesomeIcon className='text-2xl text-red-500 my-2' icon={faSackDollar}></FontAwesomeIcon>
            <h2 className="text-3xl font-bold ">
            <CountUp 
                end={112}
                duration={6}
            />
                M+</h2>
            <p>Annual Revenue</p>
            </div>
            <div className='text-center'>
            <FontAwesomeIcon className='text-2xl text-red-500 my-2' icon={faLaptopFile}></FontAwesomeIcon>
            <h2 className="text-3xl font-bold ">
            <CountUp 
                end={100}
                duration={6}
            />+</h2>
            <p>Products</p>
            </div>

            <div className='text-center'>
            <FontAwesomeIcon className='text-2xl text-red-500 my-2' icon={faStar}></FontAwesomeIcon>
            <h2 className="text-3xl font-bold ">
            <CountUp 
                end={68}
                duration={6}
            />
                k+</h2>
            <p>Reviews</p>
            </div>
        </div>
    </div>
    );
};

export default BusinessSummary;