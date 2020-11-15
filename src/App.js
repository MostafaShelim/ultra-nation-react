import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
// import data from './data/data.json';
import {data} from './data/data'
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])
  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  // fakeData generate
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    setClubs(data);
  }, [])
  return (
    <div className="App">
      <ul>
        {
          clubs.map(club => <li key={club.id}>{club.name}</li>)
        }
      </ul>
      <h3>Country Loaded: {countries.length}</h3>
      <h3>Country Added: {cart.length}</h3>
      <Cart cart = {cart}></Cart>
      {
        countries.map(country => <Country handleAddCountry = {handleAddCountry} key = {country.alpha3Code} country = {country}></Country>)
      }
    </div>
  );
}

export default App;
