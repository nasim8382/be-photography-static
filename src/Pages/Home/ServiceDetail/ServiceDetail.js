import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import thanks from '../../../images/thank-you.jpg';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className='container'>
            <div className='thanks-img'>
                <img className='img-fluid' src={thanks} alt="" />
            </div>
            <h1 className='text-center my-4 booking-title'>You booked: {name}</h1>
            <button className='d-block mx-auto booking-btn text-uppercase' onClick={navigateToCheckout}>Please Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetail;