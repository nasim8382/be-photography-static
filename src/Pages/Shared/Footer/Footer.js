import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div>

            </div>
            <div className='copywrite-text'>
                <p className='text-center text-white'> copywrite  &copy;{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;