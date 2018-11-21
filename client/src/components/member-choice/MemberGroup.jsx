import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberPreview from './MemberPreview';

import '../../css/member-choice/MemberGroup.css';

const members = [
  { name: 'Ben Hubsch1', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch2', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch3', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch4', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch5', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch6', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch7', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch8', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch9', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch10', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch11', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch12', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch13', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch14', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
  { name: 'Ben Hubsch15', imageSrc: 'https://image.ibb.co/bQBKnA/24902379.png' },
];

export default class MemberGroup extends Component {
  state = {
    selected: null,
  };

  onSelect(name) {
    this.setState({ selected: name });
  }

  render() {
    // const { members } = this.props;
    const { selected } = this.state;
    const half = Math.floor((members.length + 1) / 2);
    const firstHalf = members.slice(0, half);
    const secondHalf = members.slice(half);
    return (
      <div className="MemberGroup-container">
        <div className="MemberGroup-row">
          {firstHalf.map(member => (
            <MemberPreview
              key={member.name}
              isSelected={member.name === selected}
              onSelect={() => this.onSelect(member.name)}
              {...member}
            />
          ))}
        </div>
        <div className="MemberGroup-row">
          {secondHalf.map(member => (
            <MemberPreview
              key={member.name}
              isSelected={member.name === selected}
              onSelect={() => this.onSelect(member.name)}
              {...member}
            />
          ))}
        </div>
      </div>
    );
  }
}

MemberGroup.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
