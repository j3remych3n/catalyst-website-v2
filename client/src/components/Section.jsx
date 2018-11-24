import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
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

const Section = ({
  widthRatio, leftComponent, titleWhite, titlePink, bodyComponent, vector,
}) => (
  <div>
    <Grid
      container
      style={{
        minHeight: '75%',
        paddingRight: '5%',
        zIndex: 2,
      }}
      xs={12}
    >
      <Grid
        item
        style={{
          minHeight: '100%',
        }}
        xs={widthRatio}
      >
        <Grid
          item
          style={{
            height: '20%',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <Paper elevation={0} style={styles.header} />
        </Grid>

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
        <Grid
          item
          style={{
            height: '20%',
            display: 'inline-block',
            width: '100%',
          }}
        >
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
        </Grid>

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
    </Grid>
    <div
      style={{
        position: 'absolute',
        minWidth: '110%',
        top: '-10%',
        left: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        {vector}
      </div>
    </div>
  </div>
);

Section.defaultProps = {
  leftComponent: <div />,
  vector: false,
};

Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element.isRequired,
  widthRatio: PropTypes.number.isRequired,
  vector: PropTypes.element,
};

export default Section;
