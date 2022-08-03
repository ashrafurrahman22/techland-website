import { faCamera, faComputer, faComputerMouse, faDesktop, faHeadphonesSimple, faKeyboard, faLaptopCode, faMicrochip, faMobileButton, faMobileScreenButton, faRoute, faTabletScreenButton, faTelevision, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurService = () => {
    return (
        <div style={{fontFamily:"aleo", letterSpacing:"2px"}}>
            <h2 className='text-3xl my-8 text-center font-semibold'>Our Products</h2>

                <div className='lg:grid grid-cols-5  gap-8'>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}}  className='text-5xl font-medium' icon={faComputer}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Computer</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}}  className='text-5xl font-medium' icon={faLaptopCode}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Laptop</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faDesktop}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Monitor</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faMobileScreenButton}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>SmartPhones</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faTabletScreenButton}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Ipads / Tablets</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faMicrochip}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Processor</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faHeadphonesSimple}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Headphone</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faComputerMouse}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Mouse</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faKeyboard}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>KeyBoard</h2>
                </div>

                <div className='text-center'>
                <FontAwesomeIcon style={{color:"#D0F344"}} className='text-5xl font-medium' icon={faCamera}></FontAwesomeIcon>
            <h2 className='text-xl my-2 font-lilght'>Camera</h2>
                </div>


                </div>


        </div>
    );
};

export default OurService;