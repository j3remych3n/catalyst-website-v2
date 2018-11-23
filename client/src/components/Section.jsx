import PropTypes from "prop-types";
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
            backgroundColor: "pink",
            minHeight: "50%"
          }}
          xs={12}
        >
          <Grid
            item
            style={{
              backgroundColor: "gray",
              minHeight: "100%"
            }}
            xs={this.props.widthRatio}
          >
            <Paper style={styles.left}>{this.props.leftComponent}</Paper>
          </Grid>

          <Grid
            item
            style={{
              backgroundColor: "black"
            }}
            xs={12 - this.props.widthRatio}
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
Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element,
  widthRatio: PropTypes.number,
  heightRatio: PropTypes.number
};

// width: 200, height: 200,
