import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../images/login.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import background from '../../../images/bg.jpg';
import './Login.css';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import loadingImg from '../../../images/loading.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Successfully sent reset link to your email');
        }
        else {
            toast.error('Please enter your email address');
        }
    }

    if (loading || sending) {
        loadingElement = <img className='spinner mt-4' src={loadingImg} alt="spinner" />;
    }

    if (error) {
        errorElement =  <p className='text-center text-danger mt-2'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container'>
            <div className='row login-div'>

                <div className='col-12 col-md-6 img-div'>
                    <img className='img-fluid' src={login} alt="" />
                </div>

                <div className='col-12 col-md-6 my-auto py-5 form-div'
                style={{backgroundImage: `url(${background})`}}>
                    <h2 className="my-4 text-center form-title">Dear Client Please Sign In</h2>
                    <div className='login-form w-75  mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef}  className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <label htmlFor="email">Password</label>
                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                            {errorElement}
                            {loadingElement}

                            <input className='mx-auto mt-4 mb-3 rounded text-uppercase login-btn' type="submit" value="Login" />
                        </form>
                        <div className='register-forget-text'>
                            <p>need an Account?
                            <Link to='/register' className="orange-text text-decoration-none"> Register</Link>
                            </p>
                            <p onClick={resetPassword} className="orange-text">Forget Password?</p>
                        </div>
                        <SocialLogin></SocialLogin>
                        <ToastContainer position="top-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;