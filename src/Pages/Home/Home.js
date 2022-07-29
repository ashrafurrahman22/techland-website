import React from 'react';
import OurService from '../OurService/OurService';
import Banner from './Banner/Banner';
import HeadPhoneParts from './HeadPhoneParts/HeadPhoneParts';
import LatestProducts from './LatestProducts.js/LatestProducts';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OurService></OurService>
           <Tools></Tools>
           <LatestProducts></LatestProducts>
           <HeadPhoneParts></HeadPhoneParts>
        </div>
    );
};

export default Home;