import React from 'react';
import './About.css';
import person from '../../images/person.jpg';

const About = () => {
    return (
        <div className='about-section' >
            <div className="container">
               <div className='about-div'>
                    <img src={person} alt="" />
                    <h1 className='about-title'>Nasim Reza</h1>
                    <p className='about-text'>
                        <span className='about-sub-title'>My Goal: </span>
                       I want to a unique and expert full stack web developer. I have interest on UI/UX part, so I will focus more in fronend development work. Now I am in the process of learning with programming hero team. At first I will finish this journey very well. Then I will prove myself and try to get an internship from a famous company. After that my day by day learning habit will give me lot of experience to become a good developer. For now this is the short goal of my mind.
                    </p>
               </div>
            </div>
        </div>
    );
};

export default About;