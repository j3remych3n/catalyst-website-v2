import React from 'react';
import Companies from './components/Companies';

import logo from './logo.svg';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <ul>
      <Companies />
    </ul>
  </div>
);

export default App;
