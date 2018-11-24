import React, { Component } from "react";
import axios from "axios";
import uuidv1 from "uuid/v1";
import colors from "../colors.js";

export default class Blurbs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blurbs: ""
    };

    axios
      .get("/api/wwd/" + props.section)
      .then(response => {
        this.setState({ blurbs: response.data.val });
        console.log(response);
      })
      .catch(() => {});
  }

  render() {
    const { blurbs } = this.state;

    if (blurbs === "") return "";
    console.log(blurbs);
    // for (var obj in blurbs) {
    //     //   console.log(obj);
    //     if (props.section === obj.Key) {
    //       renData = obj.Value;
    //     }
    //   }

    return <span>{blurbs}</span>;
  }
}
