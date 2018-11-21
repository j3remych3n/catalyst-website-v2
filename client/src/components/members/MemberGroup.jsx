import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberPreview from './MemberPreview';

import '../../css/members/MemberGroup.css';

export default class MemberGroup extends Component {
  state = {
    selected: null,
  };

  render() {
    const { members } = this.props;
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
              onSelect={() => this.setState({ selected: member.name })}
              {...member}
            />
          ))}
        </div>
        <div className="MemberGroup-row">
          {secondHalf.map(member => (
            <MemberPreview
              key={member.name}
              isSelected={member.name === selected}
              onSelect={() => this.setState({ selected: member.name })}
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
