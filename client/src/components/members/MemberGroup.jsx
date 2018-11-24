import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MemberPreview from './MemberPreview';
import colors from '../../colors';

const MemberGroupContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  text-align: center;

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.pink};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e84768;
  }
`;

const MemberGroupRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class MemberGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  render() {
    const { members, onSelect } = this.props;
    const { selected } = this.state;
    const half = Math.floor((members.length + 1) / 2);
    const firstHalf = members.slice(0, half);
    const secondHalf = members.slice(half);
    return (
      <MemberGroupContainer id="scrollable">
        <MemberGroupRow>
          {firstHalf.map(member => (
            <MemberPreview
              key={member.name}
              isSelected={member.name === selected}
              onSelect={() => {
                this.setState({ selected: member.name });
                onSelect(member);
              }}
              {...member}
            />
          ))}
        </MemberGroupRow>
        <MemberGroupRow>
          {secondHalf.map(member => (
            <MemberPreview
              key={member.name}
              isSelected={member.name === selected}
              onSelect={() => {
                this.setState({ selected: member.name });
                onSelect(member);
              }}
              {...member}
            />
          ))}
        </MemberGroupRow>
      </MemberGroupContainer>
    );
  }
}

MemberGroup.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired,
};
