import PropTypes from "prop-types";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default class Section extends Component {
  render() {
    return (
      <Grid
        className="section"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* left */}
        <Grid style={{ minHeight: "100%" }} item xs={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          />
        </Grid>
        {/* right */}
        <Grid item xs={9}>
          <Grid container>
            <Paper style={{ minWidth: "100%", minHeight: "100%" }}> aaa </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
