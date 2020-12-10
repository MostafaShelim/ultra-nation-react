import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(data => setCountry(data.data));
    },[]);
    const {flag, population, area, capital, region} = country[0];
    return (
        <div className='country'>
            <img src={flag} alt=""/>
            <h2>Country: {name}</h2>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default CountryDetails;