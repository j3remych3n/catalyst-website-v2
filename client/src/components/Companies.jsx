import React, { Component } from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselSettings = {
  pauseOnHover: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  dots: false,
  autoplaySpeed: 0,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
    const { logos } = this.state;
    return (
      <Grid item xs={8}>
        <Slider {...carouselSettings}>
          {logos.map(logo => (
            <div key={uuidv1()}>
              <img src={logo} alt="" className="Logo-responsive" />
            </div>
          ))}
        </Slider>
      </Grid>
    );
  }
}
