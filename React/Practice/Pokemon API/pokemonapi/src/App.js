import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(respok => {
        
        return respok.json()
      })
      .then(respok => {
        setPokemons(respok.results)
      })
      .catch((err) => {
        console.log(err);
      })
     }, []);  
 
  return (
    <div className="App"  style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemons.map((pok, index)=>{
            return (<li key={index}>{pok.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;