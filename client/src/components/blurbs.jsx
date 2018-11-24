import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Blurbs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blurbs: '',
    };

    axios
      .get(`/api/wwd/${props.section}`)
      .then((response) => {
        this.setState({ blurbs: response.data.val });
      })
      .catch(() => {});
  }

  render() {
    const { blurbs } = this.state;

    if (blurbs === '') return '';

    return <span>{blurbs}</span>;
  }
}

Blurbs.propTypes = {
  section: PropTypes.string.isRequired,
};
