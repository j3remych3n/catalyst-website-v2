import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import colors from '../colors';

const ContactContainer = styled.div`
  min-height: 100% !important;
  min-width: 100% !important;
  padding-left: 2.5% !important;
  margin-right: 5% !important;
  margin: 0 !important;
  padding-top: ${({ device }) => (device === 'desktop' ? '5%' : '2%')} !important;
`;

const ContactButton = styled(Button)`
  min-height: ${({ device }) => (device === 'desktop' ? '400px' : '175px')} !important;
  min-width: 100% !important;
  font-family: GlacialIndifference !important;
  font-size: ${({ device }) => (device === 'desktop' ? '25pt' : '15pt')} !important;
  background-color: ${({ color }) => color} !important;
  color: ${({ textColor }) => textColor} !important;
  text-transform: none !important;
`;

const buttonContent = [
  {
    color: colors.gray,
    text: 'email',
    textColor: colors.white,
    link: 'mailto:dukecatalyst@gmail.com',
    icon: 'poop',
  },
  {
    color: colors.blue,
    text: 'facebook',
    textColor: colors.white,
    link: 'https://www.facebook.com/dukecatalyst',
    icon: 'poop',
  },
  {
    color: colors.pink,
    text: 'instagram',
    textColor: colors.white,
    link: 'https://www.instagram.com/dukecatalyst/',
    icon: 'poop',
  },
];

const contactButtons = (width, device) => buttonContent.map(({
  color, text, textColor, link,
}, index) => (
  <Grid item xs={device === 'mobile' ? 12 : width}>
    <Delay wait={800 * index}>
      <Fade>
        <ContactButton
          variant="contained"
          onClick={() => window.open(link, '_blank').focus()}
          color={color}
          device={device}
          textColor={textColor}
        >
          {text}
        </ContactButton>
      </Fade>
    </Delay>
  </Grid>
));

const ContactUs = ({ device }) => {
  const dir = device === 'desktop' ? 'row' : 'column';
  const buttonWidth = device === 'desktop' ? 4 : 10;
  return (
    <ContactContainer device={device}>
      <Delay wait={100}>
        <Fade>
          <Paper style={{ padding: '14px' }}>
            <Grid container spacing={16} direction={dir}>
              {contactButtons(buttonWidth, device)}
            </Grid>
          </Paper>
        </Fade>
      </Delay>
    </ContactContainer>
  );
};

ContactUs.propTypes = {
  device: PropTypes.string.isRequired,
};

export default ContactUs;
