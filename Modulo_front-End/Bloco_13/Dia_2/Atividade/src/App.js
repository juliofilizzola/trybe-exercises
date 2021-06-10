import React from 'react';
import './App.css';
import pokemons from './Component/data';
import Pokedex from './Component/Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;