import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex  justify-content-center  align-items-center or-text'>
                <div className='straight-line'></div>
                    <p className='mx-3 mt-2'>or sign in with</p>
                <div className='straight-line'></div>
            </div>
            <div>
                <button className='google-sign-in-btn'>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={25} src={google} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Google Sign In</h6>
                    </div>
                </button>

                <button className='google-sign-in-btn'>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={25} src={github} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Github Sign In</h6>
                    </div>
                </button>

                <button className='google-sign-in-btn'>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={30} src={facebook} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Facebook Sign In</h6>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;