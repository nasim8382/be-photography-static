import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import login1 from '../../../images/register.png';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <div className='row'>

                {<div className='col-6'>
                    <img className='img-fluid' src={login1} alt="" />
                </div>}

                <div className='col-6 my-auto'>
                    <h2 className="text-primary text-center mt-3">Please Register</h2>
                    <div className='register-form'>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input className='input-field' type="text" name="name" placeholder='Your Name'/>

                            <label htmlFor="email">Email</label>
                            <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <label htmlFor="email">Password</label>
                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                            <input className='btn btn-primary text-white px-5 mx-auto mt-2 rounded text-uppercase' type="submit" value="Register" />
                        </form>
                        <p className='text-center'>Already have an Account?
                            <Link to='/login' className="text-primary text-decoration-none"> Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;