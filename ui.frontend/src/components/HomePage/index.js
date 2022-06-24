/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./index.css')

export const HomePage = ({ title, subtitle, logoImage = {}, backgroundImage = {} }) => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [location, setLocation] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        await fetch('http://api.weatherapi.com/v1/current.json?key=91d0c33bbe064dc3bd0143610222306&q=Belém&aqi=no')
            .then(response => { if (response.status === 200) { return response.json() } })
            .then(data => {
                console.log('data', data)
                setLocation(data)
                setData(data.location)
            });
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="home-container">
            <header className="header-item-1">
                <img src={logoImage.src} alt='logo' className="compasso-logo-2" />
                <div className="location">
                    {location && data && (
                        <div>
                            <p>{data.name}</p>
                            <p>{data.region}</p>
                            <p>{data.localtime}</p>
                            <p>{location.current.temp_c}</p>
                        </div>)
                    }
                </div>
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
                    <h1>that enable our client's growth</h1>
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

