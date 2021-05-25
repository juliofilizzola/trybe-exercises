import React from 'react';
import ReactDOM from 'react-dom';

const add = () => {
  const addI = (
    <div>
      <p>Xablau!</p>
    </div>
  );
  ReactDOM.render(addI, document.getElementById('xablau'));
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>São {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
add();
setInterval(tick, 1000);
