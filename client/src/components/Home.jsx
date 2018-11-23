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
        sectionsColor={["rgba(0,0,0,0)", "rgba(0,0,0,0)", "#24306c", "#24306c"]}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <LandingSplash />
              <Section
                leftComponent={
                  <div>
                    <h1> JANE LI </h1>
                    <h2> Jane sure loves her hamster </h2>
                    <img
                      src="https://dtech.duke.edu/sites/dtech.duke.edu/files/styles/scholar_grid_thumbnail/public/DTech51.JPG"
                      alt="Jane"
                    />
                  </div>
                }
                titleWhite={"members"}
                titlePink={"[]"}
                bodyComponent={
                  <div>
                    <h2> MEMBER 1 MEMBER 2 MEMBER 3 MEMBER 4 </h2>
                    <h2> MEMBER 5 MEMBER 6 MEMBER 7 MEMBER 8 </h2>
                  </div>
                }
                widthRatio={3}
                heightRatio={3}
              />

              <Section
                leftComponent={
                  <div>
                    <img
                      src="https://dtech.duke.edu/sites/dtech.duke.edu/files/styles/scholar_grid_thumbnail/public/DTech51.JPG"
                      alt="Jane"
                    />
                  </div>
                }
                titleWhite={"What we "}
                titlePink={"do()"}
                bodyComponent={
                  <h2>
                    {" "}
                    At Catalyst, we organize and host both pre-professional and
                    social events. Some pre-professional events we've hosted in
                    the past include resume workshops, tutorial workshops, and
                    guest speakers. Social events include casual dinners,
                    parties, and SkyZone.{" "}
                  </h2>
                }
                widthRatio={4}
                heightRatio={3}
              />

              <Section
                leftComponent={
                  <div>
                    <h1> JANE LI </h1>
                  </div>
                }
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
