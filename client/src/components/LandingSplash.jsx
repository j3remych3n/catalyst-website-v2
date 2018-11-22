import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../fonts.css";
import colors from "../colors.js";

const style = {
  canvas: {
    backgroundColor: "rgba(0,0,0,0)",
    paddingRight: "10%"
  },
  catalyst: {
    fontFamily: "HKGrotesk",
    color: colors.gray,
    fontSize: 160
  },
  chevron: {
    marginBottom: -25
  },
  subheader: {
    fontFamily: "GlacialIndifference",
    color: "#515151",
    fontSize: 30
  }
};

const w = window.innerWidth;
const h = window.innerHeight;

const LandingSplash = () => (
  <Paper className="section" elevation={0} style={style.canvas}>
    <Grid
      container
      style={{ minHeight: "100%", zIndex: 1, backgroundColor: "rba(0,0,0,0)" }}
      justify="center"
      alignItems="flex-end"
      direction="column"
    >
      <Grid item>
        <Typography style={style.catalyst} variant="h5" component="h3">
          <img src={chevron} width="130" style={style.chevron} />
          catalyst
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" style={style.subheader}>
          duke's premier shitposting tech frat ben hubsch yolo swag.
        </Typography>
      </Grid>
      <svg
        width={1.5 * w}
        height={(2753 * (1.5 * w)) / 2917}
        viewBox="0 0 2917 2753"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          zIndex: -1,
          paddingTop: "150%",
          marginLeft: "25%"
        }}
      >
        <path
          d="M3765.97 1754.37C3908.47 1068.3 3980.09 582.793 3896 588C3612 605.585 2130.5 752 1784.5 334.5C1575.01 81.7189 1258.84 -216.121 573.499 231.5C269.754 429.887 135.122 1000.92 97.602 1714.63L3765.97 1754.37Z"
          fill="#222E70"
        />
      </svg>
    </Grid>
  </Paper>
);
export default LandingSplash;
