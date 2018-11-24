import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from './Section';
import LandingSplash from './LandingSplash';
import BodyWrapper from './BodyWrapper';
import '../overrides.css';
import Faq from './Faq';
import Blurbs from './blurbs';
import Members from './members/Members';
import CompanyCarousel from './CompanyCarousel';

const sectionList = ['home', 'mission', 'what we do', 'members', "where we've worked", 'faqs'];

const Home = () => (
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
              <BodyWrapper style={{ minHeight: '100%', minWidth: '100%' }} basic>
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
              <BodyWrapper style={{ minHeight: '100%', minWidth: '100%' }} basic>
                <Blurbs section="what we do" />
              </BodyWrapper>
)}
            vector={(
              <svg
                style={{
                  minWidth: Math.max(1500, window.innerWidth * 1.1),
                  display: 'block',
                  margin: 'auto',
                }}
                viewBox="0 0 1440 954"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-455.25 953.698C407.506 657.081 1091.01 742.933 1481.88 872.331C1872.75 1001.73 1903.99 -18.6212 1424.62 57.105C945.256 132.831 110.507 192.75 -43.6183 0.750244L-455.25 953.698Z"
                  fill="#FF7B7B"
                  fillOpacity="0.13"
                />
              </svg>
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

export default Home;
