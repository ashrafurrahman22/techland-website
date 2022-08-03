import React from 'react';
import BusinessSummary from '../Home/BusinessSummary/BusinessSummary';
import AboutCard from './AboutCard';
import Members from './Members';

const About = () => {
    return (
        <div>
            <AboutCard></AboutCard>
            <BusinessSummary></BusinessSummary>
            <Members></Members>
        </div>
    );
};

export default About;