import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

function CompanyCarouselLeftArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <KeyboardArrowLeft onClick={onClick} />
    </div>
  );
}

CompanyCarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CompanyCarouselLeftArrow;
