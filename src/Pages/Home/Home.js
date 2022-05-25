import React from 'react';
import Review from '../Reviews/Review';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import HeadPhoneParts from './HeadPhoneParts/HeadPhoneParts';
import LatestProducts from './LatestProducts.js/LatestProducts';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <Review></Review>
           <LatestProducts></LatestProducts>
           <HeadPhoneParts></HeadPhoneParts>
        </div>
    );
};

export default Home;