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

  handleClick(choice) {
    const { chooseYear } = this.props;
    chooseYear(choice);
    this.setState({ selected: choice });

    // resets the scrollbar
    document.getElementsByClassName('MemberGroup-container')[0].scrollLeft = 0;
  }

  render() {
    const { selected } = this.state;
    const { choices } = this.props;
    return (
      <div className="ButtonGroup-container">
        {choices.map(choice => (
          <div
            onClick={() => this.handleClick(choice)}
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
  choices: PropTypes.arrayOf(PropTypes.number).isRequired,
  chooseYear: PropTypes.func.isRequired,
};
