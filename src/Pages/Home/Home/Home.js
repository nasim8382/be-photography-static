import React from 'react';
import corner from '../../../images/icon/corner-icon-7.jpg';
import corner1 from '../../../images/icon/corner-icon-8.jpg';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='d-flex align-items-center justify-content-center'>
                <img className='corner-icon corner-icon-one' src={corner} alt="" />
                <img className='corner-icon corner-icon-two' src={corner1} alt="" />
                <h1 className='text-uppercase my-5 pt-1'>our <span className='title-span'>services</span></h1>
                <img className='corner-icon corner-icon-three'  src={corner} alt="" />
                <img className='corner-icon corner-icon-four' src={corner1} alt="" />
            </div>
        </div>
    );
};

export default Home;