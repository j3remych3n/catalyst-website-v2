import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import styled from 'styled-components';

const LeftArrow = styled.div`
  cursor: pointer;
  color: white;
  display: inline;
  transform: scale(3);
`;

function CompanyCarouselLeftArrow(props) {
  const { onClick } = props;
  return (
    <LeftArrow>
      <KeyboardArrowLeft onClick={onClick} />
    </LeftArrow>
  );
}

CompanyCarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CompanyCarouselLeftArrow;
