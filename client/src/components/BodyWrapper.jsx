import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../colors';

const StyledPaper = styled(Paper)`
  min-height: 100% !important;
  min-width: 100% !important;
  padding-left: 2.5% !important;
  margin-right: 5% !important;
  margin: 0 !important;
  padding-top: ${props => (props.device === 'desktop' ? '5%' : '2%')} !important;
  font-family: GlacialIndifference !important;
  font-size: ${props => (props.device === 'desktop' ? '25pt' : '15pt')} !important;
  color: ${colors.white} !important;
  background-color: rgba(0, 0, 0, 0) !important;
`;

const BodyWrapper = ({ children, device }) => (
  <StyledPaper device={device} elevation={0}>
    {children}
  </StyledPaper>
);

BodyWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  device: PropTypes.string.isRequired,
};

export default BodyWrapper;
