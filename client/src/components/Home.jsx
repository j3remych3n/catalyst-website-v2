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
        sectionsColor={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "#24306c"
        ]}
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
