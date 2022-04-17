import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import footer1 from '../../../images/footer-img/foot-1.jpg';
import footer2 from '../../../images/footer-img/foot-2.jpg';
import footer3 from '../../../images/footer-img/foot-3.jpg';
import footer4 from '../../../images/footer-img/foot-4.jpg';
import footer5 from '../../../images/footer-img/foot-5.jpg';
import footer6 from '../../../images/footer-img/foot-6.jpg';
import footer7 from '../../../images/footer-img/foot-7.jpg';
import footer8 from '../../../images/footer-img/foot-8.jpg';
import footer9 from '../../../images/footer-img/foot-9.jpg';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='container'>
                <div className='row text-img-div'>
                    <div className='col-12 col-md-6'>
                        <div className='footer-text'>
                            <img src={logo} alt="" />
                            <p className='text-white footer-description'>BE-PHOTOGRAPHY is a renowned photography service. It has the latest equipments for premium level photoshoot. It will providing you unique and qualityful work. You can be in touch with our social media.</p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 footer-img'>
                        <div className='row g-0'>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer1} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer2} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer3} alt="" />
                            </div>
                        </div>

                        <div className='row g-0'>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer6} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer5} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer4} alt="" />
                            </div>
                        </div>

                        <div className='row g-0'>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer7} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer8} alt="" />
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src={footer9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copywrite-text'>
                <p className='text-center text-white'> copywrite  &copy;{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;