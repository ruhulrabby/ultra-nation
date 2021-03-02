import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';
 

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      data.map(country=> country.name)
    })
  }, [])

  const handleAddCountry = (country) => {
    console.log('country added',country)};
  
  return (
    <div className="App">
      <h1>country loaded : {countries.length}</h1>
      <h4>Country added: </h4>
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