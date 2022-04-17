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
                <button className='sign-in-btn google-btn'>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img className='me-2' height={25} src={google} alt="google-icon" />
                        <p className='text-uppercase sign-in-text'>
                            Google Sign In
                        </p>
                    </div>
                </button>

                <button className='sign-in-btn'>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img className='me-2' height={25} src={github} alt="google-icon" />
                        <p className='text-uppercase sign-in-text'>
                            Github Sign In
                        </p>
                    </div>
                </button>

                <button className='sign-in-btn'>
                    <div className='d-flex justify-content-center  align-items-center sign-in-hover'>
                        <img className='me-2' height={30} src={facebook} alt="google-icon" />
                        <p className='text-uppercase  sign-in-text'>
                            Facebook Sign In 
                        </p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;