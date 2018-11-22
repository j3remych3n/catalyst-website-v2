import PropTypes from "prop-types"; // ES6
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
  left: {
    height: 500,
    backgroundColor: "#3e3a6d",
    minHeight: "100%",
    color: "white"
  },

  rightTop: {
    backgroundColor: "#ef827f",
    minHeight: "20%",
    color: "white"
  },

  rightBottom: {
    marginTop: "0",
    backgroundColor: "#fbe79e",
    minHeight: "80%",
    color: "white"
  }
};

const pink = "#ef827f";
const lightblue = "#ef827f";
const blue = "#24306c";
const yellow = "#fbe79e";
const purple = "#3e3a6d";
const gray = "#555555";
const white = "#ffffff";

export default class Section extends Component {
  render() {
    return (
      <div className="section">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="left"
          minHeight="100%"
          style={{
            backgroundColor: "pink"
          }}
        >
          <Grid
            item
            minHeight="100%"
            style={{
              backgroundColor: "gray"
            }}
            xs={4}
          >
            <Paper style={styles.left}> LEFT COMPONENT </Paper>
          </Grid>

          <Grid
            item
            minHeight="100%"
            style={{
              backgroundColor: "black"
            }}
            xs={8}
          >
            <Paper style={styles.rightTop}> RIGHT TOP COMPONENT </Paper>
            <Paper style={styles.rightBottom}> RIGHT BOTTOM COMPONENT </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// width: 200, height: 200,
