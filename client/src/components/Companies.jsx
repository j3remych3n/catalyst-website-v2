import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick';

export default class Companies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: [],
    };

    axios
      .get('/api/companies')
      .then(response => this.setState({ logos: response.data.logos }))
      .catch(() => {});
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: true,
      variableWidth: true,
      pauseOnHover: false,
    };
    const { logos } = this.state;
    return (
      <Slider {...settings}>
        {logos.map(logo => (
          <div key={uuidv1()}>
            <img src={logo} alt="" height="200" />
          </div>
        ))}
      </Slider>
    );
  }
}
