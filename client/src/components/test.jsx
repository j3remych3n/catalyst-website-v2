import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blurbs: [],
    };

    axios
      .get('/api/wwd')
      .then(response => this.setState({ blurbs: response.data.whatWeDo }))
      .catch(() => {});
  }

  render() {
    const { blurbs } = this.state;
    console.log(blurbs);
    return (
      <div>
        {blurbs.map(pair => (
          <div key={uuidv1()}>
            <h1>{pair.Key}</h1>
            <h2>{pair.Value}</h2>
          </div>
        ))}
      </div>
    );
  }
}
