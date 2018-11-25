import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import colors from '../colors';

const styles = {
  left: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    minHeight: '100%',
    minWidth: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    minHeight: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2.5%',
  },

  sectionBody: {
    backgroundColor: 'rgba(100, 255, 255, 0.0)',
    minHeight: '100%',
    minWidth: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: '80pt',
    fontFamily: 'GlacialIndifference',
    color: 'white',
  },

  titleAnnotation: {
    color: colors.pink,
  },
};

const Main = styled(Grid)`
  min-height: 90%;
  padding-right: 5%;

  @media screen and (min-width: 640px) {
    min-height: 75%;
  }
`;

const Top = styled(Grid)`
  height: 35%;
  display: inline-block;
  width: 100%;

  @media screen and (min-width: 640px) {
    height: 20%;
  }
`;

const Section = ({
  widthRatio, leftComponent, titleWhite, titlePink, bodyComponent,
}) => (
  <div>
    <Main container xs={12}>
      <Grid
        item
        style={{
          minHeight: '100%',
        }}
        xs={widthRatio}
      >
        <Top item>
          <Paper elevation={0} style={styles.header} />
        </Top>

        <Grid
          item
          style={{
            height: '80%',
          }}
        >
          <Paper elevation={0} style={styles.left}>
            <Delay wait={1000}>
              <Fade>{leftComponent}</Fade>
            </Delay>
          </Paper>
        </Grid>
      </Grid>

      <Grid item style={{}} xs={12 - widthRatio}>
        <Top item>
          <Delay wait={600}>
            <Fade>
              <Paper elevation={0} style={styles.header}>
                <span style={styles.sectionTitle}>
                  {titleWhite}
                  <span style={styles.titleAnnotation}>{titlePink}</span>
                </span>
              </Paper>
            </Fade>
          </Delay>
        </Top>

        <Grid
          item
          style={{
            height: '80%',
          }}
        >
          <Delay wait={1000}>
            <Fade>{bodyComponent}</Fade>
          </Delay>
        </Grid>
      </Grid>
    </Main>
  </div>
);

Section.defaultProps = {
  leftComponent: <div />,
};

Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element.isRequired,
  widthRatio: PropTypes.number.isRequired,
};

export default Section;
