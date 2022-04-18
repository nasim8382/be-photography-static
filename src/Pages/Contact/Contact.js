import React from 'react';
import logo from '../../images/logo.png';
import enjoy from '../../images/enjoy.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container contact'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid contact-img' src={enjoy} alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <div className='contact-div'>
                        <img src={logo} alt="" />
                        <h2>Contact</h2>
                        <h5>Address: Gangni, Meherpur</h5>
                        <h5>Contact No: +88017100005555</h5>
                        <h5>Enail: be-photography@gmail.com</h5>
                        <h5>Website: www.be-photography.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;