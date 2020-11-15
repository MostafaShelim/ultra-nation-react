import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

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
  return (
    <div className="App">
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
