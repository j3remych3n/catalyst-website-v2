import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function CompanyCarouselRightArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <KeyboardArrowRight onClick={onClick} />
    </div>
  );
}

CompanyCarouselRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CompanyCarouselRightArrow;
