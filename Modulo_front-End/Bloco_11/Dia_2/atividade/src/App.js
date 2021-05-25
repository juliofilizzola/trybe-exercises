import React from 'react';
import './App.css';
import Pokemons from './components/Data';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={Pokemons} />
    </div>
  );
}

export default App;
