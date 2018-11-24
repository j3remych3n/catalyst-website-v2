import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import uuidv1 from "uuid/v1";
import LeftArrow from "./CompanyCarouselLeftArrow";
import RightArrow from "./CompanyCarouselRightArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/CompanyCarousel.css";
import "../css/CompanyCarousel-arrow.css";

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

export default class CompanyCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      companies: []
    };

    axios
      .get('/api/companies')
      .then(response => this.setState({ companies: response.data.logos }))
      .catch(() => {});
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
      <div className="carouselContainer">
        <LeftArrow onClick={this.prev} />
        <Slider
          ref={c => {
            this.slider = c;
          }}
          {...carouselSettings}
          className="carousel"
        >
          {companies.map(company => (
            <div key={uuidv1()} className="logo-container">
              <img src={company} alt="" className="logo" />
            </div>
          ))}
        </Slider>
        <RightArrow onClick={this.next} />
      </div>
    );
  }
}
