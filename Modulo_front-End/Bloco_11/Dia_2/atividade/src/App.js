import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokemon </h1>
      <Pokemon pokemons={Data} />  
    </div>
  );
}

export default App;
