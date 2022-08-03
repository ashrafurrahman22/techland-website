import React from 'react';
import OurService from '../OurService/OurService';
import ProvideService from '../ProvideService/ProvideService';
import Review from '../Reviews/Review';
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
           <Review></Review>
           <ProvideService></ProvideService>
        </div>
    );
};

export default Home;