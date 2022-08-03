import React from 'react';
import {  faGears, faLightbulb, faMicrophoneLines, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutCard = () => {
    return (
        <div className='my-5'>
            
        {/* cards */}

        <div className="lg:flex gap-8 lg:px-0 px-4">
       
        {/* first card */}
  <div id="card" class="card  lg:w-96 bg-base-100 text-black shadow-xl">
    <div class="card-body">
        <div>
        <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faMicrophoneLines}></FontAwesomeIcon>
        </div>
      <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">Introduction</h2>
      <p style={{fontFamily:"aleo", fontSize:"18px"}} className="text-justify">Tech Land is a Computer hardware, software & service supplier company established in August, 2016. We have grown consistently since inception and today we offer a wide range of computing services, products and Solutions. Computer systems are vital for both business and personal needs.  We are specialists in providing the most advanced and reliable computer systems, in installing effective software, and in providing ongoing, top-notch service.  Our systems, service, and consulting capabilities are key to providing high performance and reliability; thus insuring maximum productivity, profitability, and peace of mind.</p>
    </div>
  </div>

    {/* second card */}
  <div id="card" class="card lg:w-96 bg-base-100 text-black shadow-xl">
    <div class="card-body">
        <div>
        <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faLightbulb}></FontAwesomeIcon>
        </div>
      <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">Our Mission</h2>
      <p style={{fontFamily:"aleo", fontSize:"18px"}} className="text-justify">Tech Land’s mission is to provide computer systems and services for businesses and individuals - systems that are state of the art, highly efficient, and reliable; service that is highly competent, dedicated, and timely.  Our ultimate objective is to be a complete support system for businesses and individuals, a support system that will empower our clients with enhanced productivity, increased competitiveness, and overall satisfaction.</p>
    </div>
  </div>

    {/* third card */}
  <div id="card" class="card lg:w-96 bg-base-100 text-black shadow-xl">
    <div class="card-body">
        <div>
        <FontAwesomeIcon className="text-4xl py-2 text-red-500 card-title" icon={faGears}></FontAwesomeIcon>
        </div>
      <h2 style={{fontFamily:"raleway"}} class="card-title text-2xl">Objectives</h2>


      <div style={{fontFamily:"Aleo"}} className='flex flex-col gap-5'>

      <p style={{fontFamily:"aleo", fontSize:"18px"}} className="text-justify">The main objective of the company is to serve customers both in public and private sectors. The vision is to offer our customers a complete solutions from the study, design, hardware and software supply, tips on what and where to be purchased, service and training. We are committed to the following main principles:</p>
        

      <div className='flex items-center text-xl gap-3'>
            <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareCaretRight}></FontAwesomeIcon>
            <h3 className="font-bold">Quality</h3>
        </div>
      <div className='flex items-center text-xl gap-3'>
            <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareCaretRight}></FontAwesomeIcon>
            <h3 className='font-bold'>Service</h3>
        </div>
      <div className='flex items-center text-xl gap-3'>
            <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareCaretRight}></FontAwesomeIcon>
            <h3 className='font-bold'>EFFICIENCY</h3>
        </div>
      <div className='flex items-center text-xl gap-3'>
            <FontAwesomeIcon style={{color:"#22A55A"}} icon={faSquareCaretRight}></FontAwesomeIcon>
            <h3 className='font-bold'>INNOVATION</h3>
        </div>
      
      </div>
    </div>
  </div>    

   </div>

    </div>
    );
};

export default AboutCard;