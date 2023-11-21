import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {

  const [pokemons, setPokemons] = useState([]);

  

     useEffect(()=>{
      Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then((response)=>{

            setPokemons(response.data.results)
            console.log(response.data.results);
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