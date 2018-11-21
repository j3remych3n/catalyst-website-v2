import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../fonts.css";
import chevron from "../assets/chevron.svg";
import colors from "../colors.js";

const style = {
  canvas: {
    backgroundColor: "rgba(0,0,0,0)",
    paddingRight: "8%"
  },
  catalyst: { fontFamily: "HKGrotesk", color: colors.gray, fontSize: 160 }
};

const LandingSplash = () => (
  <Paper className="section" elevation={0} style={style.canvas}>
    <Grid
      container
      style={{ minHeight: "100%" }}
      justify="center"
      alignItems="flex-end"
      direction="column"
    >
      <Grid item>
        <Typography style={style.catalyst} variant="h5" component="h3">
          <img
            src={chevron}
            width="130"
            style={{ paddingBottom: -25, marginBottom: -25 }}
          />
          catalyst
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component="p"
          style={{
            fontFamily: "GlacialIndifference",
            color: "#515151",
            fontSize: 30
          }}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default LandingSplash;
