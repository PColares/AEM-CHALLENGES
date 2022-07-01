/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { MapTo } from '@adobe/aem-react-editable-components';
import uolBall from '../../assets/uol-ball.png';
import TempIcon from '../../assets/temp-icon.svg';

require('./index.css')

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
    const dayName = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const monName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const displayDate = dayName[date.getDay()] + ", " + date.getDate() + " de " + monName[date.getMonth()] + " de " + date.getFullYear();
    const history = useHistory();

    const LoginRedirect = () => {
        return history.push("/content/reactapp/us/en/login.html");
    }

    const fetchData = async () => {
        await fetch('http://api.weatherapi.com/v1/current.json?key=91d0c33bbe064dc3bd0143610222306&q=Belém&aqi=no')
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
        <div className="home-container">
            <header className="header-item-1">
                <img src={logoImage.src} alt='logo' className="compasso-logo-2" />
                <div className="date-container">
                    <span className="clock">{dateTime.hours}:{dateTime.minutes}</span>
                    <span className='date'>{displayDate}</span>
                    <span>{TempIcon}</span>
                </div>
                {location && data && (
                    <div className="weather-api">
                        <span>{data.name} - {data.region}</span>
                        <span className='temperature'>

                            {location.current.temp_c}º
                        </span>
                    </div>
                )}
            </header >
            <div className="body-container-2">
                <img src={uolBall} alt='logo' className="background-image-2" />
                <div className="text-container">
                    <h1 className='text-title'> {titleText1}</h1>
                    <p>{paragraphText1}</p>
                    <h1>{titleText2}</h1>
                    <p>{paragraphText2}</p>
                    <h1>{titleText3}</h1>
                    <p>{paragraphText3}</p>
                    <h1>{titleText4}</h1>
                    <p>{paragraphText4}</p>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <span>{footerText}</span>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="footer-refresh-container">
                        <span className='refresh-text'>{refreshText}</span>
                        <div className="refresh-time">
                            <span className="seconds">{counter}</span>
                            <span>seconds</span>
                        </div>
                    </div>
                    <div className="navigate">
                        <span onClick={() => setCounter(maxSeconds)}>
                            {navigateButtonText}
                        </span>
                    </div>
                    <div className="logout">
                        <span className="logout-button" onClick={LoginRedirect}>
                            {logoutText}
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MapTo('reactapp/components/home-page')(HomePage);

