import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/CompanyCarousel.css';

const carouselSettings = {
  accessibility: true,
  autoplay: true,
  arrows: true,
  dots: false,
  infinite: true,
  pauseOnHover: false,
  rows: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};

export default class CompanyCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
    };

    axios
      .get('/api/companies')
      .then(response => this.setState({ companies: response.data.logos }))
      .catch(() => {});
  }

  render() {
    const { companies } = this.state;
    return (
      <Grid item xs={6} className="carouselContainer">
        <Slider {...carouselSettings}>
          {companies.map(company => (
            <div key={uuidv1()}>
              <img src={company} alt="" className="logo" />
            </div>
          ))}
        </Slider>
      </Grid>
    );
  }
}
