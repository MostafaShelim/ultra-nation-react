import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const {name, flag} = props.country;
    
    return (
        <div className = 'country'>
            <img src={flag} alt=""/>
            <h2>Name: {name}</h2>
            <Link to={'/country/'+name}><button>Show Me</button></Link>
        </div>
    );
};

export default Country;