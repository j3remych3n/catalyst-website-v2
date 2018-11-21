import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../fonts.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const LandingSplash = () => (
  <Paper elevation={0}>
    <Typography style={{ fontFamily: "Glacial" }} variant="h5" component="h3">
      catalyst
    </Typography>
    <Typography component="p">
      lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </Paper>
);

export default LandingSplash;
