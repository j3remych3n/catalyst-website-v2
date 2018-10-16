import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import Companies from './components/Companies';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    names: [],
  };

  componentDidMount() {
    axios
      .get('/api/members')
      .then(response => this.setState({ names: response.data.names }))
      .catch(() => {});
  }

  render() {
    const { names } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <Companies />
          {names.map(name => (
            <li key={uuidv1()}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
