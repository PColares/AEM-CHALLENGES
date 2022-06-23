import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

require('./index.css')

export const HomePage = ({ title, subtitle, logoImage = {}, backgroundImage = {} }) => {
    return (
        <div className="home-container">
            <header className="header-item-1">
                <img src={logoImage.src} alt='logo' className="compasso-logo-2" />
            </header>
            <div className="body-container-2">
                <img src={backgroundImage.src} alt='logo' className="background-image-2" />
                <div className="text-container">
                    <h1 className='text-title'>Our mission is</h1>
                    <p>Nossa missão é</p>
                    <h1>to transform the world</h1>
                    <p>transformar o mundo</p>
                    <h1>building digital experiences</h1>
                    <p>construindo experiências digitais</p>
                    <h1>that enable our client’s growth</h1>
                    <p>que permitam o crescimento dos nossos clientes</p>
                </div>
            </div>
            <div className="footer-container">
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default MapTo('reactapp/components/home-page')(HomePage);

