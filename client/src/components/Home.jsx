import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "./Section.jsx";
import LandingSplash from "./LandingSplash.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactFullpage
        navigation
        sectionsColor={["#ffffff", "#24306c", "#24306c", "#24306c"]}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <LandingSplash />
              <Section />
              <Section />
              <Section />
            </div>
          );
        }}
      />
    );
  }
}
