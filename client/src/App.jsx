import React from 'react';
import Grid from '@material-ui/core/Grid';
import Companies from './components/Companies';
import MemberPreview from './components/member-choice/MemberPreview';

import logo from './logo.svg';

import './css/App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        “All happy families are alike; each unhappy family is unhappy in its own way.” ― Leo Tolstoy
        , Anna Karenina
      </h1>
    </header>
    <Grid container alignItems="center" justify="center">
      {/* <Companies /> */}
    </Grid>
    <MemberPreview />
  </div>
);

export default App;
