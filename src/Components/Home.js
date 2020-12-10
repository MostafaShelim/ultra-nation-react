import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';
const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(data => setCountry(data))
    }, []);
    let countries = country.data;
    countries = countries.slice(0, 10);
    return (
        <div>
            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }
        </div>
    );
};

export default Home;