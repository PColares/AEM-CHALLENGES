import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { TitleSection } from '../TitleSection/titleSection';
import { LoginForm } from '../FormSection/formSection'
import notebookBackground from '../../assets/notebook-background.png'
import styled from 'styled-components';

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

    @media (max-width: 650px) {
        height: 100vh;
    }
`;

const FlexItem1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin-left: 15%;
    margin-top: 8%;

    @media (max-width: 650px) {
        margin-top: 35%;
        width: 80vw;
    }
`;

const FlexItem2 = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const BackgroundImage1 = styled.img`
    width: 50vw;

    @media (max-width: 650px) {
        display: none;
    }
`;

const CompassoLogo1 = styled.img`
    position: absolute;
    margin-top: 25px;

    @media (max-width: 650px) {
        width: 280px;
        height: 80px;
        margin-top: 0;
        right: 10%;
        left: 10%;
        padding-top: 0;
    }
`;

export const LoginPage = ({ title, paragraph, buttonName, logoImage = {} }) => {
    const loginTitle = "Login"
    return (
        <Container1>
            <FlexItem1>
                <TitleSection title={title} paragraph={paragraph} />
                <LoginForm title={loginTitle} buttonName={buttonName} />
            </FlexItem1>
            <FlexItem2>
                <CompassoLogo1 src={logoImage.src} alt='compasso logo' />
                <BackgroundImage1 src={notebookBackground} alt='notebook background' />
            </FlexItem2>
        </Container1>
    )
}

export default MapTo('reactapp/components/login-page')(LoginPage);

