import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')
export const BodySection = ({ text, title, buttonText, image = {} }) => {

    return (
        <body>
            <div className='Container'>
                <div>
                    <img className='LeftContainer' src={image.src} alt='scarecrow' />
                </div>
                <div className='RightContainer'>
                    <h1 className="title">{title}</h1>
                    <p className="text">{text}</p>
                    <button>{buttonText}</button>
                </div>
            </div>
        </body>
    );
};

export default MapTo('reactapp/components/body-section')(BodySection);