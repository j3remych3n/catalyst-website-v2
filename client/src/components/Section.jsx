import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import colors from '../colors';

const Main = styled(Grid)`
  min-height: ${({ device }) => (device === 'desktop' ? '75%' : '90%')} !important;
  padding: 5% !important;
`;

const Top = styled(Grid)`
  height: 20% !important;
  display: inline-block !important;
  width: 100% !important;
`;

const Bottom = styled(Grid)`
  height: 80% !important;
  display: inline-block !important;
  width: 100% !important;
`;

const Header = styled(Paper)`
  background-color: rgba(255, 255, 255, 0) !important;
  min-height: 100% !important;
  min-width: 100% !important;
  display: flex !important;
  align-items: center !important;
  padding-left: 2.5% !important;
`;

const Left = styled(Paper)`
  background-color: rgba(0, 0, 0, 0) !important;
  min-height: 100% !important;
  min-width: 100% !important;
  color: white !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

const SectionTitle = styled.span`
  font-size: ${({ device }) => (device === 'desktop' ? '60pt' : '40pt')};
  font-family: GlacialIndifference;
  color: ${colors.white};
`;

const TitleAnnotation = styled.span`
  color: ${colors.pink};
`;

const Section = ({
  widthRatio,
  leftComponent,
  titleWhite,
  titlePink,
  bodyComponent,
  device,
  renderLeft,
}) => {
  let dir = 'row';
  if (device === 'mobile' && !renderLeft) {
    widthRatio = 0;
    dir = 'column';
  }
  return (
    <div>
      <Main device={device} direction={dir} container>
        <Grid item xs={widthRatio}>
          <Top item>
            <Header device={device} elevation={0} />
          </Top>

          <Bottom device={device} item>
            <Left elevation={0}>
              <Delay wait={1000}>
                <Fade>{leftComponent}</Fade>
              </Delay>
            </Left>
          </Bottom>
        </Grid>

        <Grid item xs={12 - widthRatio}>
          <Top device={device} item>
            <Delay wait={600}>
              <Fade>
                <Header device={device} elevation={0}>
                  <SectionTitle device={device}>
                    {titleWhite}
                    <TitleAnnotation device={device}>{titlePink}</TitleAnnotation>
                  </SectionTitle>
                </Header>
              </Fade>
            </Delay>
          </Top>

          <Bottom device={device} item>
            <Delay wait={1000}>
              <Fade>{bodyComponent}</Fade>
            </Delay>
          </Bottom>
        </Grid>
      </Main>
    </div>
  );
};

Section.defaultProps = {
  leftComponent: <div />,
  renderLeft: false,
};

Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element.isRequired,
  widthRatio: PropTypes.number.isRequired,
  device: PropTypes.string.isRequired,
  renderLeft: PropTypes.bool,
};

export default Section;
