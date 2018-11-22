import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../css/members/ButtonGroup.css';

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    const { choices } = this.props;
    this.state = {
      selected: choices[0],
    };
  }

  render() {
    const { selected } = this.state;
    const { choices, chooseYear } = this.props;
    return (
      <div className="ButtonGroup-container">
        {choices.map(choice => (
          <div
            onClick={() => {
              chooseYear(choice);
              this.setState({ selected: choice });
            }}
            className={
              choice === selected
                ? 'ButtonGroup-choice ButtonGroup-selected'
                : 'ButtonGroup-choice ButtonGroup-unselected'
            }
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            key={choice}
          >
            {choice}
          </div>
        ))}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.Integer).isRequired,
  chooseYear: PropTypes.func.isRequired,
};
