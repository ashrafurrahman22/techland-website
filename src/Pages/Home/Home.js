import React from 'react';
import Review from '../Reviews/Review';
import Banner from './Banner/Banner';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <Review></Review>
        </div>
    );
};

export default Home;