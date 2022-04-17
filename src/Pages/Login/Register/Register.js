import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import register from '../../../images/register.png';
import background from '../../../images/bg.jpg';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <div className='row login-div'>

                <div className='col-12 col-md-6 img-div'>
                    <img className='img-fluid' src={register} alt="" />
                </div>

                <div className='col-12 col-md-6 my-auto py-4 form-div'
                style={{backgroundImage: `url(${background})`}}>
                    <h2 className="my-2 text-center">Welcome You</h2>
                    <div className='login-form w-75  mx-auto'>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input className='input-field' type="text" name="name" placeholder='Your Name'/>

                            <label htmlFor="email">Email</label>
                            <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <label htmlFor="email">Password</label>
                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                            <input className='mx-auto mt-4 mb-3 rounded text-uppercase login-btn' type="submit" value="Login" />
                        </form>
                        <p className='text-center'>have an Account?
                            <Link to='/login' className="orange-text text-decoration-none"> Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;