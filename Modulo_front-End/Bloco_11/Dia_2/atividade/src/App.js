import React from 'react';
import './App.css';
import Pokemons from './components/Data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <h1>My Pokedex! </h1>
      <p>Essa é minha coleção!</p>
      <Pokedex pokemons={Pokemons} />
    </div>
  );
}

export default App;
