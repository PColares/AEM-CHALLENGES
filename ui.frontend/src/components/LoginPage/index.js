import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { TitleSection } from '../TitleSection/titleSection';
import { LoginForm } from '../FormSection/formSection'

require('./index.css')

export const LoginPage = ({ title, paragraph, buttonName, logoImage = {}, backgroundImage = {} }) => {
    const loginTitle = "Login"
    return (
        <div className="container">
            <div className="flex-item-1">
                <TitleSection title={title} paragraph={paragraph} />
                <LoginForm title={loginTitle} buttonName={buttonName} />
            </div>
            <div className="flex-item-2">
                <img src={logoImage.src} alt='logo' className="compasso-logo-1" />
                <img src={backgroundImage.src} alt='background' className='background-image-1' />
            </div>
        </div>
    )
}

export default MapTo('reactapp/components/login-page')(LoginPage);

