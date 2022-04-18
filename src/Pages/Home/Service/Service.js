import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{ img, name, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (name) => {
        navigate(`/service/${name}`)
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 mx-auto mb-4' id='services'>
            <img className='img-fluid' src={img} alt="" />
            <h2 className='my-3 service-title'>{name}</h2>
            <p>{description}</p>
            <div className='d-flex justify-content-between'>
                <h4 className='price-text'>${price}</h4>
                <button className='booking-btn' onClick={ () => navigateToServiceDetail(name)}>Book Now</button>
            </div>
        </div>
    );
};

export default Service;