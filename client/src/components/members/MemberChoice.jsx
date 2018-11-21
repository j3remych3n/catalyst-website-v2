import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberGroup from './MemberGroup';
import ButtonGroup from './ButtonGroup';

export default class MemberChoice extends Component {
  constructor(props) {
    super(props);
    const { members } = this.props;
    const years = new Set();
    const membersByYear = {};
    members.forEach((member) => {
      years.add(parseInt(member.year, 10));
      if (!(member.year in membersByYear)) {
        membersByYear[member.year] = [];
      }
      membersByYear[member.year].push(member);
    });
    this.state = {
      membersByYear,
      years: Array.from(years).sort(),
      chosenYear: Array.from(years).sort()[0],
    };
  }

  render() {
    const { years, membersByYear, chosenYear } = this.state;
    return (
      <>
        <ButtonGroup choices={years} chooseYear={year => this.setState({ chosenYear: year })} />
        <MemberGroup members={membersByYear[chosenYear]} />
      </>
    );
  }
}

MemberChoice.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      year: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};
