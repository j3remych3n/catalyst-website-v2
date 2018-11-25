import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../colors';

const StyledPaper = styled(Paper)`
  min-height: 100%;
  min-width: 100%;
  padding-left: 2.5%;
  margin-right: 5%;
  margin: 0;
  padding-top: 5%;
  font-family: GlacialIndifference;
  font-size: 25pt;
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0) !important;
`;

const BodyWrapper = ({ children }) => <StyledPaper elevation={0}>{children}</StyledPaper>;

BodyWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BodyWrapper;
