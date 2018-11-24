import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "./Section.jsx";
import LandingSplash from "./LandingSplash.jsx";
import BodyWrapper from "./BodyWrapper.jsx";
import "../overrides.css";
import Faq from "./Faq.jsx";
import Blurbs from "./blurbs";

const sectionList = [
  "home",
  "what we do",
  "members",
  "where we've worked",
  "faqs"
];

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
          "#24306c",
          "#24306c",
          "#24306c",
          "#24306c"
        ]}
        navigationTooltips={sectionList}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <LandingSplash id="home" />

              <Section
                id="what we do"
                titleWhite={"what we "}
                titlePink={"do()"}
                bodyComponent={
                  <BodyWrapper
                    style={{ minHeight: "100%", minWidth: "100%" }}
                    basic={true}
                  >
                    <Blurbs section="what we do" />
                  </BodyWrapper>
                }
                widthRatio={4}
                heightRatio={3}
              />

              <Section
                id="members"
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
                    <h1> JANE LI </h1>
                  </div>
                }
                titleWhite={"members"}
                titlePink={"[]"}
                bodyComponent={<h1> BOOM </h1>}
                widthRatio={4}
                heightRatio={3}
              />
              <Section
                titleWhite={"faq"}
                titlePink={"?"}
                bodyComponent={<Faq />}
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
