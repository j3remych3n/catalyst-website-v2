import React, { Component } from 'react';
import axios from 'axios';
import LeftArrow from './CompanyCarouselLeftArrow';
import RightArrow from './CompanyCarouselRightArrow';
import '../css/CompanyCarousel.css';
import '../css/SingleImageCarousel.css';

const styles = {
  images: {
    width: '80%',
    height: '100%',
    borderRadius: 7,
  },
};

export default class SingleImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      images: [],
      index: 1,
    };

    axios
      .get('/api/grouppictures')
      .then(response => this.setState({ images: response.data.pictures }))
      .catch(() => {});
  }

  next() {
    const { images, index } = this.state;

    this.state.index = (index + 1) % images.length;
    this.forceUpdate();
  }

  prev() {
    const { images, index } = this.state;
    const condition = (index + 1) % images.length >= 0;
    this.state.index = condition ? (index + 1) % images.length : images.length - 1;
    this.forceUpdate();
  }

  render() {
    const { images, index } = this.state;
    return (
      <div className="carouselContainer">
        <LeftArrow onClick={this.prev} />
        <img src={images[index]} alt="Catalyst Group" style={styles.images} />
        <RightArrow onClick={this.next} />
      </div>
    );
  }

  // increment() {
  //     window.setInterval(()=>{
  //         this.state.index = (this.state.index + 1)%this.state.images.length;
  //     },5000)
  //   }
}
