import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../colors';

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const YearButton = styled.div`
  font-family: 'GlacialIndifference';
  font-size: 20pt;
  padding: 0px 8px 0px 8px;
  margin: 4px;
  outline: none;
  color: ${({ selected }) => (selected ? '#fff' : 'rgba(255, 255, 255, 0.65)')};
  border-bottom: ${({ selected }) => (selected ? `3px solid ${colors.pink}` : '3px solid transparent')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};

  :hover {
    border-bottom: 3px solid ${colors.pink};
    cursor: pointer;
  }
`;

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    const { choices } = this.props;
    this.state = {
      selected: choices[0],
    };
  }

  handleClick(choice) {
    const { chooseYear } = this.props;
    chooseYear(choice);
    this.setState({ selected: choice });

    // resets the scrollbar
    document.getElementById('scrollable').scrollLeft = 0;
  }

  render() {
    const { selected } = this.state;
    const { choices } = this.props;
    return (
      <ButtonGroupContainer>
        {choices.map(choice => (
          <YearButton
            selected={choice === selected}
            onClick={() => this.handleClick(choice)}
            key={choice}
          >
            {choice}
          </YearButton>
        ))}
      </ButtonGroupContainer>
    );
  }
}

ButtonGroup.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.number).isRequired,
  chooseYear: PropTypes.func.isRequired,
};
