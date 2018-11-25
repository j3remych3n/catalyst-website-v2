import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styled from 'styled-components';

import colors from '../colors';

const RightArrow = styled.div`
  cursor: pointer;
  color: ${colors.white};
  display: inline;
  transform: scale(3);
`;

function CompanyCarouselRightArrow(props) {
  const { onClick } = props;
  return (
    <RightArrow>
      <KeyboardArrowRight onClick={onClick} />
    </RightArrow>
  );
}

CompanyCarouselRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CompanyCarouselRightArrow;
