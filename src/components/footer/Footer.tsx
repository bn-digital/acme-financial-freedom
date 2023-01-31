import React from 'react';
import footer from './image/footer.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="image-wrapper">
                <img src={footer} alt=""/>
            </div>
        </div>
    );
};

export default Footer;
