import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
  fillPaper: {
    minHeight: "100%",
    minWidth: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    paddingLeft: "2.5%",
    marginRight: "5%",
    margin: "0",
    paddingTop: "5%",
    fontFamily: "GlacialIndifference",
    fontSize: "25pt",
    color: "white"
  }
};

const BodyWrapper = ({ children, basic }) => (
  <Paper elevation={0} style={styles.fillPaper}>
    {children}
  </Paper>
);

export default BodyWrapper;