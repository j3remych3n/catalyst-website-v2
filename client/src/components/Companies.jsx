import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      arrow: true,
    };
    const { logos } = this.state;
    return (
      <Slider {...settings}>
        {logos.map(logo => (
          <div>
            <img src={logo} alt="" height="200" />
          </div>
        ))}
      </Slider>
    );
  }
}
