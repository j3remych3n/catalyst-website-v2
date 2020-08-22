import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import MemberCard from './MemberCard';
import MemberChoice from './MemberChoice';
import Section from '../Section';

import catalystLogo from '../../assets/svgs/cata_chevron.svg';

const DEFAULT_CARD = {
  name: 'Duke Catalyst',
  imageSrc: catalystLogo,
  year: '2019',
  giturl: '',
  linkedinurl: 'https://www.linkedin.com/company/duke-catalyst/',
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
  }

  componentDidMount() {
    axios
      .get('/api/members')
      .then((response) => {
        this.setState({ members: response.data.members });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { selected, members } = this.state;
    const { device } = this.props;
    return (
      <div className="section">
        <Section
          device={device}
          leftComponent={<MemberCard selected={selected} />}
          titleWhite="members"
          titlePink="[]"
          bodyComponent={
            <MemberChoice
              members={members}
              onSelect={(chosen) => this.setState({ selected: chosen })}
            />
          }
          widthRatio={4}
        />
      </div>
    );
  }
}

Members.propTypes = {
  device: PropTypes.string.isRequired,
};
