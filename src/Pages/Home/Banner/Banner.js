import React from 'react';
import banner from '../../../assets/heading-pic.jpg';

const Banner = () => {
    return (
        <div style={{fontFamily:"Aleo", letterSpacing:"2px"}} className="hero my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='p-6'>
                    <h1 className="lg:text-4xl text-3xl font-bold">Build Your <br /> <span className='text-6xl'>Dream PC</span> </h1>
                    <p className="py-6 text-justify">We are specialists in providing the most advanced and reliable computer hardware parts, mobile hardware parts and other tech gadget parts in providing ongoing, top-notch service. Our systems, service, and consulting capabilities are key to providing high performance and reliability.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;