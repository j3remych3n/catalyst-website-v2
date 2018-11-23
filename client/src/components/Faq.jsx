import React, { Component } from "react";
import axios from "axios";

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
    console.log(faq);
    return <h1> HELLO</h1>;
  }
}
