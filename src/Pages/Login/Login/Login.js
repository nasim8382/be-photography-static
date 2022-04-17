import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import background from '../../../images/bg.jpg';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='row login-div'>

                <div className='col-12 col-md-6 img-div'>
                    <img className='img-fluid' src={login} alt="" />
                </div>

                <div className='col-12 col-md-6 my-auto py-5 form-div'
                style={{backgroundImage: `url(${background})`}}>
                    <h2 className="my-4 text-center">Dear Client Please Sign In</h2>
                    <div className='login-form w-75  mx-auto'>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <label htmlFor="email">Password</label>
                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

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