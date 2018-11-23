import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "./Section.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactFullpage
        navigation
        sectionsColor={["#24306c", "#24306c", "#24306c"]}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Section
                leftComponent={<h1> TO THE LEFT </h1>}
                titleWhite={"members"}
                titlePink={"[]"}
                bodyComponent={<h1> BOOM </h1>}
                widthRatio={4}
                heightRatio={3}
              />

              <Section
                leftComponent={<h1> TO THE LEFT </h1>}
                titleWhite={"members"}
                titlePink={"[]"}
                bodyComponent={<h1> BOOM </h1>}
                widthRatio={4}
                heightRatio={3}
              />
            </div>
          );
        }}
      />
    );
  }
}
