import React from 'react';
import Grid from '@material-ui/core/Grid';
import Companies from './components/Companies';

import logo from './logo.svg';

import './css/App.css';
import './fonts.css';
import WwdCarousel from './components/WwdCarousel';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ok</h1>
    </header>
    <Grid container alignItems="center" justify="center">
      <Companies />
    </Grid>
    <Grid container alignItems="center" justify="center" style={{ backgroundColor: 0x3e3a6d }}>
      <WwdCarousel />
    </Grid>
  </div>
);

export default App;
