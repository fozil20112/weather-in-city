import React, {useEffect, useState} from 'react';
import {ApiService} from "../apiService/api-service";
import {useParams} from "react-router";

const Search = () => {
    const [weather, setWeather] = useState()
    const {city} = useParams()
    useEffect(() => {
        ApiService.fetching(`weather?city=${city}`)
            .then(data => {
                setWeather(data)
            })
    }, [city])
    console.log(weather)
    return (
        <div className='mx-auto hg'>
            <h1>Weather in {weather?.city}</h1>
            <div>
                <h2>Temperature: {weather?.temperature}C°</h2>
                <h5>wind-speed: {weather?.wind_speed}ms</h5>
                <p>Discription {weather?.description}</p>
            </div>
        </div>
    );
};

export default Search;
