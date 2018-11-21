import React from 'react';
import PropTypes from 'prop-types';

import '../../css/member-choice/MemberPreview.css';

const MemberPreview = (props) => {
  const {
    name, imageSrc, isSelected, onSelect,
  } = props;
  const selectedStyling = isSelected ? 'MemberPreview-selected' : 'MemberPreview-unselected';
  return (
    <div
      className="MemberPreview-member"
      onClick={onSelect}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <img src={imageSrc} alt={name} className={`MemberPreview-picture ${selectedStyling}`} />
      <div className="MemberPreview-name">{name}</div>
    </div>
  );
};

MemberPreview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MemberPreview;
