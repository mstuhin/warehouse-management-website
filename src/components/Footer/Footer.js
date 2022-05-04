import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='text-center mt-5 pt-5 '>
                <p><small>copyright &copy; {new Date().getUTCFullYear()}</small></p>
            </footer>
        </div>
    );
};

export default Footer;