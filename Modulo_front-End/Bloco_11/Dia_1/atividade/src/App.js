import React from 'react';
import './App.css';
import task from './task';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}



class App extends React.Component {
  render() {
    return (  
      <ul>{task}</ul>
    );
  }
}

export default App;
