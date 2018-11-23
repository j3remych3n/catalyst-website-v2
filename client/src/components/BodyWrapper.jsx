import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
  fillPaper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "0",
    margin: "0",
    minHeight: "100%",
    minWidth: "100%"
  },
  basicStyle: {
    fontFamily: "GlacialIndifference",
    color: "white",
    fontSize: "20"
  }
};
const BodyWrapper = ({ children, basic }) => (
  <Paper elevation={0} style={styles.fillPaper}>
    {children}
  </Paper>
);

export default BodyWrapper;
