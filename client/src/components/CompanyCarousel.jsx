import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';
import LeftArrow from './CompanyCarouselLeftArrow';
import RightArrow from './CompanyCarouselRightArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselSettings = {
  accessibility: true,
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  pauseOnHover: false,
  rows: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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

const CarouselContainer = styled.div`
  padding-top: 5%;
  padding-left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;

const Carousel = styled(Slider)`
  min-width: 50px;
  min-height: 50px;
`;

const LogoContainer = styled.div`
  width: 100px;
`;

const Logo = styled.img`
  max-width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
`;

export default class CompanyCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      companies: [],
    };
    axios
      .get('/api/companies')
      .then(response => this.setState({ companies: response.data.logos }))
      .catch(err => console.error(err));
  }

  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  render() {
    const { companies } = this.state;
    return (
      <CarouselContainer>
        <LeftArrow onClick={this.prev} />
        <Carousel
          ref={(c) => {
            this.slider = c;
          }}
          {...carouselSettings}
        >
          {companies.map(company => (
            <LogoContainer key={uuidv1()}>
              <Logo src={company} alt="Tech company logo." />
            </LogoContainer>
          ))}
        </Carousel>
        <RightArrow onClick={this.next} />
      </CarouselContainer>
    );
  }
}
