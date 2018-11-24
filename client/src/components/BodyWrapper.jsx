import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const styles = {
  fillPaper: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: '2.5%',
    marginRight: '5%',
    margin: '0',
    paddingTop: '5%',
    fontFamily: 'GlacialIndifference',
    fontSize: '25pt',
    color: 'white',
  },
};

const BodyWrapper = ({ children }) => (
  <Paper elevation={0} style={styles.fillPaper}>
    {children}
  </Paper>
);

BodyWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BodyWrapper;
