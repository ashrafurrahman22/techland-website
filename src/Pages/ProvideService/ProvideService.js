import { faMoneyCheckDollar, faRotate, faStar, faThumbsUp, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProvideService = () => {
    return (
        <div style={{fontFamily:"aleo",letterSpacing:"3px"}} className='text-white my-16'>
            <h2 className='text-3xl my-6 text-center font-semibold'>Services That We Provide</h2>

            <div className='grid grid-cols-5 gap-2'>

            
            <div className='flex flex-col my-4'>
                <FontAwesomeIcon style={{color:"D0F344"}} className='text-3xl my-3' icon={faTruckFast}/>
                <div className='text-center'>
                    <h2 className='text-xl font-semibold'>Free Delivery</h2>
                    <p>From $50</p>
                </div>
            </div>

            
            <div className='flex flex-col my-4'>
                <FontAwesomeIcon style={{color:"D0F344"}} className='text-3xl my-3' icon={faThumbsUp}/>
                <div className='text-center'>
                    <h2 className='text-xl font-semibold'>99% Customer</h2>
                    <p>Feedbacks</p>
                </div>
            </div>

            
            <div className='flex flex-col my-4'>
                <FontAwesomeIcon style={{color:"D0F344"}} className='text-3xl my-3' icon={faRotate}/>
                <div className='text-center'>
                    <h2 className='text-xl font-semibold'>365 Days</h2>
                    <p>For Free Return</p>
                </div>
            </div>

            
            <div className='flex flex-col my-4'>
                <FontAwesomeIcon style={{color:"D0F344"}} className='text-3xl my-3' icon={faMoneyCheckDollar}/>
                <div className='text-center'>
                    <h2 className='text-xl font-semibold'>Payment</h2>
                    <p>Security System</p>
                </div>
            </div>

            <div className='flex flex-col my-4'>
                <FontAwesomeIcon style={{color:"D0F344"}} className='text-3xl my-3' icon={faStar}/>
                <div className='text-center'>
                    <h2 className='text-xl font-semibold'>Only Best</h2>
                    <p>Brands</p>
                </div>
            </div>



            </div>
        </div>
    );
};

export default ProvideService;