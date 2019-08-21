import React from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import Section from './Section';
import LandingSplash from './LandingSplash';
import BodyWrapper from './BodyWrapper';
import Faq from './Faq';
import Blurbs from './Blurbs';
import Members from './members/Members';
import CompanyCarousel from './CompanyCarousel';
import SingleImageCarousel from './SingleImageCarousel';
import ContactUs from './ContactUs';
import '../css/FullpageOverrides.css';
import '../css/DotOverrides.css';

const sectionList = [
  'home',
  'mission',
  'what we do',
  'members',
  "where we've worked",
  'faqs',
  'contact us',
];

const sectionColors = [
  'rgba(0,0,0,0)',
  '#222E70',
  '#222E70',
  '#222E70',
  '#222E70',
  '#222E70',
  '#222E70',
];

const CompanyWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  ${({ device }) => device === 'mobile'
    && `
    display: flex !important;
    align-items: center !important;
  `};
`;

const Home = ({ device }) => (
  <ReactFullpage
    navigation
    autoScrolling={device === 'desktop'}
    fitToSection={device === 'desktop'}
    sectionsColor={sectionColors}
    navigationTooltips={sectionList}
    render={() => (
      <div>
        <LandingSplash device={device} />

        <div className="section">
          <Section
            device={device}
            titleWhite="mission statement"
            titlePink=";"
            bodyComponent={(
              <BodyWrapper device={device}>
                <Blurbs section="who_we_are" />
              </BodyWrapper>
)}
            widthRatio={4}
          />
        </div>

        <div className="section">
          <Section
            device={device}
            titleWhite="what we "
            titlePink="do()"
            leftComponent={(
              <div>
                <SingleImageCarousel />
              </div>
)}
            bodyComponent={(
              <BodyWrapper device={device}>
                <Blurbs section="what_we_do" />
              </BodyWrapper>
)}
            widthRatio={4}
          />
        </div>

        <Members device={device} />

        <div className="section">
          <Section
            device={device}
            titleWhite="where we've worked"
            titlePink=":"
            bodyComponent={(
              <CompanyWrapper device={device}>
                <CompanyCarousel />
              </CompanyWrapper>
)}
            widthRatio={4}
          />
        </div>
        <div className="section">
          <Section
            device={device}
            titleWhite="faq"
            titlePink="?"
            bodyComponent={<Faq device={device} />}
            widthRatio={4}
          />
        </div>
        <div className="section">
          <Section
            device={device}
            titleWhite="contact us"
            titlePink=">"
            bodyComponent={<ContactUs device={device} />}
            widthRatio={4}
          />
        </div>
      </div>
    )}
  />
);

Home.propTypes = {
  device: PropTypes.string.isRequired,
};

export default Home;
