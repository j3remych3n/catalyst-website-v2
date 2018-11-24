import React, { Component } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import MemberChoice from './MemberChoice';
import Section from '../Section';

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
      members: [DEFAULT_CARD],
    };
    axios
      .get('/api/members')
      .then((response) => {
        this.setState({ members: response.data.members });
      })
      .catch(() => {});
  }

  render() {
    const { selected, members } = this.state;
    return (
      <div className="section">
        <Section
          leftComponent={<MemberCard selected={selected} />}
          titleWhite="members"
          titlePink="[]"
          bodyComponent={(
            <MemberChoice
              members={members}
              onSelect={chosen => this.setState({ selected: chosen })}
            />
)}
          widthRatio={3}
          heightRatio={3}
        />
      </div>
    );
  }
}

Members.propTypes = {};
