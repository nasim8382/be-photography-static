import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import background from '../../../images/bg.jpg';
import './Login.css';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingText;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        loadingText = <p className='text-center purple'>Loading...</p>;
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
                            <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <label htmlFor="email">Password</label>
                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                            {loadingText}
                            {errorElement}

                            <input className='mx-auto mt-4 mb-3 rounded text-uppercase login-btn' type="submit" value="Login" />
                        </form>
                        <div className='register-forget-text'>
                            <p>need an Account?
                            <Link to='/register' className="orange-text text-decoration-none"> Register</Link>
                            </p>
                            <p className="orange-text">Forget Password?</p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;