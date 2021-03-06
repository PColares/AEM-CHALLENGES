/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { MapTo } from '@adobe/aem-react-editable-components';
import uolBall from '../../assets/uol-ball.png';
import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100vw;
`;

const HeaderItem1 = styled.header`
  height: 163px;
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DisplayDate = styled.span`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #222222;
`;

const Clock = styled.span`
    font-family: 'Poppins' !important;
    font-style: normal;
    font-weight: 700;
    font-size: 124px;
    line-height: 216px;
    color: #222222;
    height: 160px;
`;

const CompassoLogo2 = styled.img`
    width: 300px;
    height: 84px;
    top: 19px;
    left: 28px;
`;

const BodyContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    min-height: 60vh;

    padding-top: 60px;
`;

const BackgroundImage2 = styled.img`
    position: absolute;
    width: 60rem;
    max-height: 40rem;
    left: -160px;
    top: 300px;
    margin-top: 90px;
    z-index: -1;
    object-fit: scale-down;
`;

const TextContainer = styled.div`
    margin-right: 5%;
    text-align: right;

    .text-title {
        font-size: 36px;
    }

    h1{
        font-weight: 700;
        font-size: 48px;
        color: #c12d18;
        line-height: 0.8;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        color: #222222;
    }

`;

const FooterContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    z-index: 4;
`;

const FooterContent = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const FooterText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-right: 1%;

    span {
        font-family: 'Poppins' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: right;
    }
`;

const VerticalLine = styled.div`
    border-left: 2px solid white;
    height: 50px;
    margin-left: 25px;
`;

const RefreshContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100px;
`;

const RefreshText = styled.span`
    width: 50%;
    text-align: center;
    color: white;
`;

const RefreshTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    color: white;
`;

const Seconds = styled.span`
    font-family: 'Poppins' !important;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
`;

const Navigate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #c13216;
    background-color: white;
`;

const Logout = styled.div`
    width: 100px;
    height: 100px;
    color: #ffffff;
`;

const LogoutButton = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
`;

const WeatherApi = styled.div`
    width: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    font-family: 'Poppins' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #222222;
    margin-top: 20px;
`;
const Temperature = styled.span`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 5px;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #222222;
    gap: 5px;
`;

export const HomePage = ({
    logoImage = {},
    titleText1,
    titleText2,
    titleText3,
    titleText4,
    paragraphText1,
    paragraphText2,
    paragraphText3,
    paragraphText4,
    footerText,
    refreshText,
    navigateButtonText,
    logoutText }) => {

    let maxSeconds = 600;
    let refStatus = useRef();
    const [counter, setCounter] = useState(maxSeconds);
    const [location, setLocation] = useState(null);
    const [data, setData] = useState(null);
    const date = new Date();
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes()
    });
    const dayName = ["domingo", "segunda-feira", "ter??a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s??bado"];
    const monName = ["janeiro", "fevereiro", "mar??o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const displayDate = dayName[date.getDay()] + ", " + date.getDate() + " de " + monName[date.getMonth()] + " de " + date.getFullYear();
    const history = useHistory();

    const LoginRedirect = () => {
        return history.push("/content/reactapp/us/en/login.html");
    }

    const fetchData = async () => {
        await fetch('http://api.weatherapi.com/v1/current.json?key=91d0c33bbe064dc3bd0143610222306&q=Bel??m&aqi=no')
            .then(response => { if (response.status === 200) { return response.json() } })
            .then(data => {
                setLocation(data)
                setData(data.location)
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        function tick() {
            setCounter(prevCounter => prevCounter - 1);
        }
        refStatus.current = setInterval(() => tick(), 1000);
    }, [])

    useEffect(() => {
        if (counter === 0) {
            LoginRedirect();
        }
    }, [counter])

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <HomeContainer>
            <HeaderItem1>
                <CompassoLogo2 src={logoImage.src} alt='logo' className="compasso-logo-2" />
                <DateContainer>
                    <Clock>{dateTime.hours}:{dateTime.minutes}</Clock>
                    <DisplayDate>{displayDate}</DisplayDate>
                </DateContainer>
                {location && data && (
                    <WeatherApi>
                        <span>{data.name} - {data.region}</span>
                        <Temperature>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3438 0.851685C21.8762 0.851685 21.4755 1.25247 21.4755 1.72005V4.09137C21.4755 4.55895 21.8762 4.95974 22.3438 4.95974C22.8114 4.95974 23.2122 4.55895 23.2122 4.09137V1.72005C23.2122 1.25247 22.8114 0.851685 22.3438 0.851685Z" fill="#454545" />
                                <path d="M30.5599 4.2583C30.2259 3.92432 29.6916 3.92432 29.3576 4.2583L27.6876 5.92824C27.3536 6.26223 27.3536 6.79661 27.6876 7.1306C28.0216 7.46459 28.556 7.46459 28.89 7.1306L30.5599 5.46066C30.8939 5.12667 30.8939 4.59229 30.5599 4.2583Z" fill="#454545" />
                                <path d="M16.9665 5.92824L15.2966 4.2583C14.9626 3.92432 14.4282 3.92432 14.0942 4.2583C13.7603 4.59229 13.7603 5.12667 14.0942 5.46066L15.7642 7.1306C16.0982 7.46459 16.6325 7.46459 16.9665 7.1306C17.3005 6.79661 17.3005 6.26223 16.9665 5.92824Z" fill="#454545" />
                                <path d="M22.9784 26.9362C22.3104 26.2682 21.4086 25.8674 20.4067 25.8674C20.3733 25.8674 20.3399 25.8674 20.3399 25.8674H10.9548C10.4872 25.8674 10.0864 26.2348 10.0864 26.7358C10.0864 27.2034 10.4538 27.6042 10.9548 27.6042H20.3399C20.3733 27.6042 20.3733 27.6042 20.4067 27.6042C20.941 27.6042 21.4086 27.8046 21.7426 28.172C22.0766 28.5059 22.3104 29.0069 22.3104 29.5079C22.3104 30.0423 22.11 30.5099 21.7426 30.8439C21.4086 31.1778 20.9076 31.4116 20.4067 31.4116C19.8723 31.4116 19.4047 31.2112 19.0707 30.8439C18.7367 30.5099 18.5029 30.0089 18.5029 29.5079C18.5029 29.0403 18.1021 28.6395 17.6346 28.6395C17.167 28.6395 16.7662 29.0403 16.7662 29.5079C16.7662 30.5099 17.167 31.4116 17.835 32.0796C18.5029 32.7476 19.4047 33.1484 20.4067 33.1484C21.4086 33.1484 22.3104 32.7476 22.9784 32.0796C23.6464 31.4116 24.0471 30.5099 24.0471 29.5079C24.0471 28.5059 23.6464 27.6042 22.9784 26.9362Z" fill="#454545" />
                                <path d="M30.5265 19.4882L28.89 17.8516C28.556 17.5177 28.0216 17.5177 27.6876 17.8516C27.554 17.9852 27.4872 18.1188 27.4538 18.2858C27.4204 17.5177 27.22 16.8163 26.9528 16.1483C27.2868 15.7141 27.5874 15.2131 27.7878 14.7122C28.0884 14.0108 28.222 13.2426 28.222 12.4744C28.222 10.8379 27.554 9.36834 26.4853 8.33298C25.4165 7.29762 23.947 6.62964 22.3438 6.62964C21.2417 6.62964 20.2063 6.93023 19.3045 7.46461C18.6699 7.86539 18.1022 8.36638 17.6346 8.96756C16.2986 8.06579 14.6955 7.53141 12.9921 7.53141C10.9548 7.53141 9.08448 8.26618 7.64833 9.50194C6.37917 10.6041 5.44401 12.0736 5.00982 13.8104C3.70727 13.9774 2.53831 14.5786 1.66994 15.4469C0.634578 16.4823 0 17.9184 0 19.4882C0 21.0579 0.634578 22.4941 1.66994 23.5294C2.7053 24.5648 4.14145 25.1994 5.7112 25.1994H20.9077C22.7112 25.1994 24.3143 24.4646 25.5167 23.2956C26.6857 22.1267 27.4204 20.4901 27.4204 18.6866V18.6532C27.4538 18.7868 27.5206 18.9204 27.6542 19.0206L29.3242 20.6905C29.6582 21.0245 30.1925 21.0245 30.5265 20.6905C30.8605 20.3566 30.8605 19.8222 30.5265 19.4882ZM24.3477 22.0933C23.4794 22.9617 22.277 23.496 20.9745 23.496H5.7446C4.64244 23.496 3.64047 23.0619 2.9057 22.3271C2.17092 21.5923 1.73674 20.5903 1.73674 19.4882C1.73674 18.386 2.17092 17.3841 2.9057 16.6493C3.64047 15.9145 4.64244 15.4803 5.7446 15.4803C5.87819 15.4803 6.04519 15.4469 6.14538 15.3801C6.34578 15.2465 6.47937 15.0461 6.51277 14.8123C6.74656 13.2426 7.54813 11.8399 8.68369 10.8713C9.81925 9.90272 11.3222 9.30154 12.9253 9.30154C14.2947 9.30154 15.5639 9.73573 16.6326 10.4705C17.4342 11.0383 18.1356 11.7731 18.6031 12.6748C18.4695 12.7416 18.336 12.775 18.2024 12.8418C17.3674 13.2092 16.6326 13.777 15.998 14.445C15.6974 14.8123 15.7308 15.3467 16.0648 15.6473C16.4322 15.9479 16.9666 15.9145 17.2672 15.5805C17.7348 15.0795 18.2692 14.6788 18.8703 14.3782C19.4715 14.111 20.1395 13.944 20.8409 13.944C22.1768 13.944 23.3458 14.4784 24.2141 15.3467C25.0825 16.2151 25.6169 17.4175 25.6169 18.72C25.7171 20.056 25.1827 21.2249 24.3477 22.0933ZM26.1847 14.0776C26.1179 14.2446 26.0511 14.4116 25.9509 14.5452C25.8173 14.3782 25.6837 14.2446 25.5501 14.111C24.3811 12.942 22.7446 12.2072 20.9411 12.2072C20.7741 12.2072 20.5737 12.2072 20.4067 12.2406C20.0393 11.4391 19.5383 10.7043 18.9371 10.1031C19.2711 9.63553 19.7053 9.26814 20.1729 8.96756C20.8075 8.56677 21.5422 8.36638 22.3104 8.36638C23.446 8.36638 24.5147 8.83396 25.2495 9.56873C26.0177 10.3369 26.4519 11.3723 26.4519 12.5078C26.4853 13.0756 26.3851 13.61 26.1847 14.0776Z" fill="#454545" />
                                <path d="M33.1317 11.6395H30.7603C30.2928 11.6395 29.892 12.0403 29.892 12.5079C29.892 12.9755 30.2928 13.3763 30.7603 13.3763H33.1317C33.5992 13.3763 34 12.9755 34 12.5079C33.9666 12.0403 33.5992 11.6395 33.1317 11.6395Z" fill="#454545" />
                            </svg>
                            {location.current.temp_c}??
                        </Temperature>
                    </WeatherApi>
                )}
            </HeaderItem1 >
            <BodyContainer2>
                <BackgroundImage2 src={uolBall} alt='logo' className="background-image-2" />
                <TextContainer>
                    <h1 className='text-title'> {titleText1}</h1>
                    <p>{paragraphText1}</p>
                    <h1>{titleText2}</h1>
                    <p>{paragraphText2}</p>
                    <h1>{titleText3}</h1>
                    <p>{paragraphText3}</p>
                    <h1>{titleText4}</h1>
                    <p>{paragraphText4}</p>
                </TextContainer>
            </BodyContainer2>
            <FooterContainer>
                <FooterContent>
                    <FooterText>
                        <span>{footerText}</span>
                        <VerticalLine></VerticalLine>
                    </FooterText>
                    <RefreshContainer>
                        <RefreshText>{refreshText}</RefreshText>
                        <RefreshTime>
                            <Seconds>{counter}</Seconds>
                            <span>seconds</span>
                        </RefreshTime>
                    </RefreshContainer>
                    <Navigate>
                        <span onClick={() => setCounter(maxSeconds)}>
                            {navigateButtonText}
                        </span>
                    </Navigate>
                    <Logout>
                        <LogoutButton onClick={LoginRedirect}>
                            {logoutText}
                        </LogoutButton>
                    </Logout>
                </FooterContent>
            </FooterContainer>
        </HomeContainer>
    )
}

export default MapTo('reactapp/components/home-page')(HomePage);

