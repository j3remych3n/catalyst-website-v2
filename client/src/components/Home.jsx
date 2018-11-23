import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from './Section.jsx';
import LandingSplash from './LandingSplash.jsx';
import BodyWrapper from './BodyWrapper.jsx';

const sectionList = ['home', 'what we do', 'members', "where we've worked", 'faq', 'contact'];

const DEFAULT_CARD = {
  name: 'Duke Catalyst',
  imageSrc: catalystLogo,
  year: '2019',
  giturl: '',
  linkedinurl: '',
  personalurl: '',
  bio: "Duke's first social and pre-professional tech organization.",
};

export default class Home extends Component {
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
    return (
      <ReactFullpage
        navigation
        sectionsColor={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', '#24306c', '#24306c']}
        render={({ state, fullpageApi }) => (
          <div>
            <LandingSplash />

            <Section
              titleWhite="what we "
              titlePink="do()"
              bodyComponent={(
                <BodyWrapper style={{ minHeight: '100%', minWidth: '100%' }} basic>
                  <span>
                      At Catalyst, we organize and host both pre-professional and social events.
                      Some pre-professional events we've hosted in the past include resume
                      workshops, tutorial workshops, and guest speakers. Social events include
                      casual dinners, parties, and SkyZone.
                  </span>
                </BodyWrapper>
)}
              widthRatio={4}
              heightRatio={3}
            />

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

            <Section
              leftComponent={(
                <div>
                  <h1> JANE LI </h1>
                </div>
)}
              titleWhite="members"
              titlePink="[]"
              bodyComponent={<h1> BOOM </h1>}
              widthRatio={4}
              heightRatio={3}
            />
          </div>
        )}
      />
    );
  }
}
