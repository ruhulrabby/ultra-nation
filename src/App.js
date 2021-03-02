import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';
 

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]); 
  
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      data.map(country=> country.name)
    })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
 
  
  return (
    <div className="App">
      <h1>country loaded : {countries.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart= {cart} ></Cart>
      <ul>
      {
        countries.map(country => <Country country={country} handleAddCountry= {handleAddCountry} key= {country.alpha3Code} >
        </Country> )
      }
      </ul>
    </div>
  );
}

export default App;