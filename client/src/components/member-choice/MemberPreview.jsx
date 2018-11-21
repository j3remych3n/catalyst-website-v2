import React, { Component } from 'react';

import '../../css/member-choice/MemberPreview.css';

const srcImage = 'https://image.ibb.co/bQBKnA/24902379.png';
const name = 'Ben';

export default class Companies extends Component {
  render() {
    return <img src={srcImage} alt={name} className="MemberPreview-picture" />;
  }
}
