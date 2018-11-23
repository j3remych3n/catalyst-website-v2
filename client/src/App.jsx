import React from "react";
import Grid from "@material-ui/core/Grid";
import Companies from "./components/Companies";
import Home from "./components/Home";
import CompanyCarousel from "./components/CompanyCarousel";

import logo from "./logo.svg";
import "./css/App.css";

import "./css/App.css";
import "./fonts.css";
import WwdCarousel from "./components/WwdCarousel";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {" "}
        Tooday is the best day to take too many Ls.{" "}
      </h1>
    </header>
    <Grid container alignItems="center" justify="center">
      <Companies />
    </Grid>
    <Grid xs={8} item style={{ backgroundColor: "pink" }}>
      <CompanyCarousel />
    </Grid>
  </div>
);

export default App;
