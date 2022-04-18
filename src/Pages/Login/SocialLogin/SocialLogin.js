import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import spinner from '../../../images/spinner.gif';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorElement;
    let loadingText;

    if (error || error1 || error2) {
        errorElement =  <p className='text-center text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
    }

    if (loading || loading1 || loading2) {
        loadingText = <img className='spinner' src={spinner} alt="spinner" />
    }

    if (user || user1 || user2) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex  justify-content-center  align-items-center or-text'>
                <div className='straight-line'></div>
                    <p className='mx-3 mt-2'>or sign in with</p>
                <div className='straight-line'></div>
            </div>
            {loadingText}
            {errorElement}
            <div>
                <button className='sign-in-btn google-btn'
                onClick={ () => signInWithGoogle() }>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img className='me-2' height={25} src={google} alt="google-icon" />
                        <p className='text-uppercase sign-in-text'>
                            Google Sign In
                        </p>
                    </div>
                </button>

                <button className='sign-in-btn'
                onClick={ () => signInWithGithub() }>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img className='me-2' height={25} src={github} alt="google-icon" />
                        <p className='text-uppercase sign-in-text'>
                            Github Sign In
                        </p>
                    </div>
                </button>

                <button className='sign-in-btn'
                onClick={ () => signInWithFacebook() }>
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