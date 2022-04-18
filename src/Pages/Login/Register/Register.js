import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import register from '../../../images/register.jpg';
import background from '../../../images/bg.jpg';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import loadingImg from '../../../images/loading.gif';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let loadingElement;

    const [
        createUserWithEmailAndPassword,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating] = useUpdateProfile(auth);

    if (loading || updating) {
        loadingElement = <img className='spinner' src={loadingImg} alt="loading" />;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;

        if (password !== confirmpassword) {
            setError('Your two passwords did not match!!!');
            return;
        }

        if (password.length < 6) {
            setError('Password must have 6 characters or more!!!');
            return;
        }

        if (!/(?=.*[0-9])/.test(password)) {
            setError('Password must have at least one number!!!');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Password must have at least one special character!!!');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className='row register-div'>

                <div className='col-12 col-md-6 img-div'>
                    <img className='img-fluid' src={register} alt="" />
                </div>

                <div className='col-12 col-md-6 my-auto py-4 form-div'
                style={{backgroundImage: `url(${background})`}}>
                    <h2 className="mt-2 mb-4 text-center form-title">Welcome You</h2>
                    <div className='register-form w-75  mx-auto'>
                        <form onSubmit={handleRegister}>
                            <input className='input-field' type="text" name="name" placeholder='Your Name'/>

                            <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                            <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                            <input className='input-field' type="password" name="confirmpassword" placeholder='Confirm Password' required/>

                            <input 
                            onClick={ () =>  setAgree(!agree) } className='mt-2 me-2' type="checkbox" name="terms" />
                            <label
                            className={`mt-2 ${agree ? 'purple' : 'orange'}`} htmlFor="terms">Agree to terms and Conditions</label>

                            <p className='text-danger register-error'>{error}</p>
                            {loadingElement}

                            <input disabled={!agree} className='mx-auto mt-2 mb-3 rounded text-uppercase register-btn' type="submit" value="Register" />
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