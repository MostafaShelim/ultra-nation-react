import React from 'react';

const Country = (props) => {
    const {name, region, population, flag} = props.country;
    const flagStyle = {
        height: '100px'
    }
    return (
        <div>
            <h3>This is {name}</h3>
            <img style = {flagStyle} src={flag} alt=""/>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <button onClick = {() => props.handleAddCountry(props.country)}>Add Country</button>
            <hr/>
        </div>
    );
};

export default Country;