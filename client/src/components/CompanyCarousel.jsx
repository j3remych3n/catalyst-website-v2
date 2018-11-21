import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import axios from 'axios';
import uuidv1 from 'uuid/v1';

const carouselSettings = {
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  rows: 3,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  swipe: true,
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
      <Grid item xs={6}>
        <Slider {...carouselSettings}>
          {companies.map(company => (
            <div key={uuidv1()}>
              <img src={company} alt="" />
            </div>
          ))}
        </Slider>
      </Grid>
    );
  }
}
