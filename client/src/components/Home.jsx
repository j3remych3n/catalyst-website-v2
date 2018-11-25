import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import Section from './Section';
import LandingSplash from './LandingSplash';
import BodyWrapper from './BodyWrapper';
import '../overrides.css';
import Faq from './Faq';
import Blurbs from './Blurbs';
import Members from './members/Members';
import CompanyCarousel from './CompanyCarousel';

const sectionList = ['home', 'mission', 'what we do', 'members', "where we've worked", 'faqs'];

const Home = ({ device }) => (
  <ReactFullpage
    navigation
    sectionsColor={['rgba(0,0,0,0)', '#24306c', '#24306c', '#24306c', '#24306c', '#24306c']}
    navigationTooltips={sectionList}
    render={() => (
      <div>
        <LandingSplash />

        <div className="section">
          <Section
            titleWhite="mission statement"
            titlePink=";"
            bodyComponent={(
              <BodyWrapper>
                <Blurbs section="who we are" />
              </BodyWrapper>
)}
            widthRatio={4}
          />
        </div>

        <div className="section">
          <Section
            titleWhite="what we "
            titlePink="do()"
            bodyComponent={(
              <BodyWrapper>
                <Blurbs section="what we do" />
              </BodyWrapper>
)}
            widthRatio={4}
          />
        </div>

        <Members />

        <div className="section">
          <Section
            titleWhite="where we've worked"
            titlePink=":"
            bodyComponent={<CompanyCarousel />}
            widthRatio={4}
          />
        </div>
        <div className="section">
          <Section titleWhite="faq" titlePink="?" bodyComponent={<Faq />} widthRatio={4} />
        </div>
      </div>
    )}
  />
);

Home.propTypes = {
  device: PropTypes.string.isRequired,
};

export default Home;
