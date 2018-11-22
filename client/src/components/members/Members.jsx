import React, { Component } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import MemberChoice from './MemberChoice';

import '../../css/members/Members.css';
import catalystLogo from '../../assets/chevron.svg';

const DEFAULT_CARD = {
  name: 'Duke Catalyst',
  imageSrc: catalystLogo,
  year: '2019',
  giturl: '',
  linkedinurl: '',
  personalurl: '',
  bio: "Duke's first social and pre-professional tech organization.",
};

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: DEFAULT_CARD,
      members: [],
    };
    axios
      .get('/api/members')
      .then((response) => {
        this.setState({ members: response.data.members });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { selected, members } = this.state;
    return members.length > 0 ? (
      <div className="Members-container">
        <MemberCard selected={selected} />
        <MemberChoice members={members} onSelect={chosen => this.setState({ selected: chosen })} />
      </div>
    ) : (
      <div />
    );
  }
}

Members.propTypes = {};
