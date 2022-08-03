import React from 'react';
import logo1 from '../../assets/about/download.png';
import logo2 from '../../assets/about/download (1).png';

const Members = () => {
    return (
        <div className='bg-white text-black px-12 py-10 rounded-xl my-10'>

        <div className='lg:w-2/5 my-10 lg:px-0 px-3 mx-auto font-aleo'>
      <div>
      <h2 id='headings' className='my-5 text-center text-4xl font-semibold'>Partners & Affiliates</h2>
       <p style={{fontFamily:"Aleo", fontSize:"18px"}} className='text-center font-medium text-md text-justify'>Many competitors claim to have great connections, but often purchase their parts from local retail stores.  In many cases Tech Land works directly with the manufacturer to guarantee you the highest possible quality at the lowest possible cost. Tech Land proudly partners with and / or highly recommends the following (and many other) computer, network, and component manufacturers:</p>
      </div>
   </div>

   {/* image */}
   <div className="flex flex-col justify-center items-center gap-5 max-w-7xl mx-auto px-12">
   <img className='border rounded-xl' src={logo1} alt="" />
       <img className='border rounded-xl' src={logo2} alt="" />

   </div>

   </div>
    );
};

export default Members;