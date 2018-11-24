import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../fonts.css';
import Delay from 'react-delay';
import Fade from 'react-reveal/Fade';
import chevron from '../assets/chevron.svg';
import colors from '../colors';

const style = {
  canvas: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingRight: '10%',
  },
  catalyst: {
    fontFamily: 'HKGrotesk',
    color: colors.gray,
    fontSize: 160,
  },
  chevron: {
    marginBottom: -25,
  },
  subheader: {
    fontFamily: 'GlacialIndifference',
    color: '#515151',
    fontSize: 30,
  },
};

const LandingSplash = () => (
  <Paper className="section" elevation={0} style={style.canvas}>
    <Grid
      container
      style={{ minHeight: '100%', zIndex: 1, backgroundColor: 'rba(0,0,0,0)' }}
      justify="center"
      alignItems="flex-end"
      direction="column"
    >
      <Grid item>
        <Delay wait={100}>
          <Fade>
            <Typography style={style.catalyst} variant="h5" component="h3">
              <img src={chevron} width="130" style={style.chevron} alt="Catalyst logo" />
              catalyst
            </Typography>
          </Fade>
        </Delay>
      </Grid>
      <Grid item>
        <Delay wait={100}>
          <Fade>
            <Typography component="p" style={style.subheader}>
              dukes premier shitposting tech frat ben hubsch yolo swag.
            </Typography>
          </Fade>
        </Delay>
      </Grid>
    </Grid>
  </Paper>
);
export default LandingSplash;
