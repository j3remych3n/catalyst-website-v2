import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../fonts.css';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import chevron from '../assets/svgs/cata_chevron.svg';
import colors from '../colors';

const headerCopy = "Duke's premier social and pre-professional tech organization";

const Canvas = styled(Paper)`
  background-color: rgba(0, 0, 0, 0) !important;
`;

const VisibilityWrapper = styled.div`
  background-color: rgba(255, 255, 255, ${({ device }) => (device === 'mobile' ? 0.9 : 0.6)});
  border-radius: ${({ device }) => (device === 'mobile' ? '0px' : '20px')};
  padding: 20px;
  backdrop-filter: blur(30px);
`;

const Catalyst = styled(Typography)`
  font-family: HKGrotesk !important;
  color: ${colors.gray} !important;
  font-size: ${({ device }) => (device === 'mobile' ? '60pt' : '130pt')} !important;
`;

const CatalystChevron = styled.img.attrs({
  width: ({ device }) => (device === 'mobile' ? 60 : 130),
})`
  margin-bottom: ${({ device }) => (device === 'mobile' ? '-11px' : '-20px')};
`;

const Subheader = styled(Typography)`
  font-family: GlacialIndifference !important;
  color: #515151 !important;
  font-size: ${({ device }) => (device === 'mobile' ? '10pt' : '25pt')} !important;
`;

const Landing = styled(Grid).attrs({
  alignItems: ({ device }) => (device === 'mobile' ? 'center' : 'flex-end'),
  container: true,
  justify: 'center',
  direction: 'column',
})`
  min-height: 100%;
  z-index: 2;
  padding-right: ${({ device }) => (device === 'mobile' ? '0' : '10%')} !important;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: ${({ device }) => (device === 'mobile' ? '60%' : 0)} !important;
`;

const LandingSplash = ({ device }) => (
  <Canvas className="section" elevation={0}>
    <Landing device={device}>
      <VisibilityWrapper device={device}>
        <Grid item>
          <Delay wait={400}>
            <Fade>
              <Catalyst device={device} variant="h5" component="h3" align="right">
                <CatalystChevron device={device} src={chevron} alt="Catalyst logo" />
                catalyst
              </Catalyst>
            </Fade>
          </Delay>
        </Grid>
        <Grid item>
          <Delay wait={400}>
            <Fade>
              <Subheader device={device} components="p" align="right">
                {headerCopy}
              </Subheader>
            </Fade>
          </Delay>
        </Grid>
      </VisibilityWrapper>
    </Landing>
    <Delay wait={1000}>
      <Fade>
        <div
          style={{
            position: 'absolute',
            minWidth: '110%',
            top: '-10%',
            left: 0,
            zIndex: -1,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              paddingTop: '4vh',
              paddingRight: '60%',
            }}
          >
            <svg
              style={{
                minWidth: Math.max(1600, window.innerWidth * 1.5),
                display: 'block',
                margin: 'auto',
              }}
              viewBox="0 0 1440 4996"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-831.963 208.711C517.037 -401.789 103 523.883 977.5 498.383C1070.27 495.678 1878.5 483.383 1977 569.883C2453.41 1505.24 976.036 6090.21 976.036 6090.21H-943.963C-943.963 6090.21 -2180.96 819.211 -831.963 208.711Z"
                fill="#222E70"
              />
            </svg>
          </div>
        </div>
      </Fade>
    </Delay>
  </Canvas>
);

LandingSplash.propTypes = {
  device: PropTypes.string.isRequired,
};

export default LandingSplash;
