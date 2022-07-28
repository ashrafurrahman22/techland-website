import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import HeadPhoneParts from './HeadPhoneParts/HeadPhoneParts';
import LatestProducts from './LatestProducts.js/LatestProducts';
import LatestReview from './LatestReview/LatestReview';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <LatestProducts></LatestProducts>
           <HeadPhoneParts></HeadPhoneParts>
        </div>
    );
};

export default Home;