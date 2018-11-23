import React, { Component } from "react";
import axios from "axios";
import uuidv1 from "uuid/v1";
import colors from "../colors.js";

const styles = {
  qTag: {
    color: colors.pink,
    display: "inline"
  },
  aTag: {
    color: colors.yellow,
    display: "inline"
  },
  txtStyle: {
    color: colors.white,
    display: "inline"
  }
};

export default class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faq: []
    };

    axios
      .get("/api/faq")
      .then(response => this.setState({ faq: response.data.questions }))
      .catch(() => {});
  }

  render() {
    const { faq } = this.state;
    const qTagOpen = "<q>";
    const qTagClose = "</q>";
    const aTagOpen = "<a>";
    const aTagClose = "</a>";

    return (
      <div align="left">
        {faq.map(pair => (
          <div key={uuidv1()}>
            <div>
              <div style={styles.qTag}>{qTagOpen}</div>
              <div style={styles.txtStyle}>{pair.Key}</div>
              <div style={styles.qTag}>{qTagClose}</div>
            </div>
            <div>
              <div style={styles.aTag}>{aTagOpen}</div>
              <div style={styles.txtStyle}>{pair.Value}</div>
              <div style={styles.aTag}>{aTagClose}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
