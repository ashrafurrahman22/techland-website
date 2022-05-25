import React from 'react';
import Review from '../Reviews/Review';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <Review></Review>
        </div>
    );
};

export default Home;