import './App.css';
import { Provider } from 'react-redux';
import FormsPerson from './components/FormsPerson';
import FormsProfessional from './components/FormsProfessional';

function App() {
  return (
    <div className="App">

      <FormsPerson />
      <FormsProfessional />
    </div>
  );
}

export default App;
