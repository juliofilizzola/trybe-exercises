import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider >
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

