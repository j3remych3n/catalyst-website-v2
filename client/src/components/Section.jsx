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
        <svg
          width="1920"
          height="1249"
          viewBox="0 0 1920 1249"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-51 0C664.998 280.292 1365.31 332.292 1924.49 184.125C2483.67 35.9576 2345.49 826.803 1710.9 1033.36C1076.3 1239.92 515.498 609.254 -51 1249V0Z"
            fill="#FF7B7B"
            fill-opacity="0.13"
          />
        </svg>
      </Grid>
    );
  }
}
