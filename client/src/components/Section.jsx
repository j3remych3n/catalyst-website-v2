import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid
          container
          style={{
            minHeight: '75%',
            paddingRight: '5%',
          }}
          xs={12}
        >
          <Grid
            item
            style={{
              minHeight: '100%',
            }}
            xs={this.props.widthRatio}
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
                  <Fade>{this.props.leftComponent}</Fade>
                </Delay>
              </Paper>
            </Grid>
          </Grid>

          <Grid item style={{}} xs={12 - this.props.widthRatio}>
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
                      {this.props.titleWhite}
                      <span style={styles.titleAnnotation}>
                        {' '}
                        {this.props.titlePink}
                        {' '}
                      </span>
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
                <Fade>{this.props.bodyComponent}</Fade>
              </Delay>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Section.propTypes = {
  leftComponent: PropTypes.element,
  titleWhite: PropTypes.string.isRequired,
  titlePink: PropTypes.string.isRequired,
  bodyComponent: PropTypes.element,
  widthRatio: PropTypes.number,
  hideLeft: PropTypes.boolean,
};
