import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../../images/error.jpg';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/home');
    }

    return (
        <div className='container'>
            <h1 className='text-center text-danger my-4'>Uh Oh!!! Page not found!</h1>
            <div className='error-img'>
                <img className='img-fluid' src={error} alt="" />
            </div>
            <button className='d-block mx-auto booking-btn text-uppercase mt-4' onClick={navigateToCheckout}>You can go now!</button>
        </div>
    );
};

export default NotFound;