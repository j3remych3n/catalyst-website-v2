import PropTypes from "prop-types"; // ES6
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  left: {
    backgroundColor: "#3e3a6d",
    minHeight: "100%",
    minWidth: "100%",
    color: "white",
    display: "inline-block"
  },

  rightTop: {
    backgroundColor: "#479fcc",
    minHeight: "100%",
    minWidth: "100%",
    color: "white",
    display: "inline-block"
  },

  rightBottom: {
    backgroundColor: "#ef827f",
    minHeight: "100%",
    minWidth: "100%",
    color: "white",
    display: "inline-block"
  },

  pinkPart: {
    color: "orange"
  },

  title: {
    fontSize: 39
  }
};

export default class Section extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.leftComponent);
  }

  render() {
    return (
      <div className="section">
        <Grid
          container
          style={{
            backgroundColor: "pink"
          }}
          xs={12}
        >
          <Grid
            item
            style={{
              backgroundColor: "gray",
              minHeight: "100%"
            }}
            xs={3}
          >
            <Paper style={styles.left}>
              <Typography style={{ color: "white" }}>
                {this.props.leftComponent}
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            style={{
              backgroundColor: "black"
            }}
            xs={9}
          >
            <Grid
              item
              style={{
                height: "20%",
                display: "inline-block",
                width: "100%"
              }}
            >
              <Paper style={styles.rightTop}>
                <span style={styles.title}>
                  {this.props.titleWhite}
                  <span style={styles.pinkPart}> {this.props.titlePink} </span>
                </span>
              </Paper>
            </Grid>

            <Grid
              item
              style={{
                height: "80%"
              }}
            >
              <Paper style={styles.rightBottom}>
                {this.props.bodyComponent}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element,
  widthRatio: PropTypes.number,
  heightRatio: PropTypes.number
};

// width: 200, height: 200,
