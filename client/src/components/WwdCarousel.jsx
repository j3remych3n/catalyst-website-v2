import React, { Component } from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/WwdCarousel.css';

const carouselSettings = {
  pauseOnHover: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  speed: 1000,
  arrows: true,
  fade: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        autoplay: true,
      },
    },
  ],
};

const styles = {
  images: {
    width: '80%',
    height: '100%',
    borderRadius: 7,
  },
};

const CarouImage = styled.img`
  max-width: 480px,
  max-height: 320px,
  border-radius: 7px,
`;

export default class WwdCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: [],
    };

    axios
      .get('/api/grouppictures')
      .then(response => this.setState({ pics: response.data.pictures }))
      .catch(err => console.err(err));
  }

  render() {
    const { pics } = this.state;
    return (
      <Grid
        item
        style={{
          maxWidth: 480,
          minWidth: 20,
        }}
      >
        <Slider {...carouselSettings}>
          {pics.map(pic => (
            <div key={uuidv1()}>
              <CarouImage src={pic} alt="" className="Logo-resp" />
            </div>
          ))}
        </Slider>
      </Grid>
    );
  }
}
