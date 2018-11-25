import React from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';

import colors from '../../colors';

const MemberPreviewMember = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :focus {
    outline: none;
  }
`;

const MemberPreviewPicture = styled.img`
  width: 131.25px;
  height: 131.25px;
  border-radius: 50%;
  transition: opacity 0.25s;
  border: ${({ selected }) => (selected ? '3px solid #ff7b7b' : `1px solid ${colors.white}`)};
  margin: ${({ selected }) => (selected ? '3px' : '5px')};

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const MemberPreviewName = styled.div`
  font-family: 'Nunito';
  color: ${colors.white};
  width: 131.25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberPreview = ({
  name, imageSrc, isSelected, onSelect,
}) => (
  <MemberPreviewMember onClick={onSelect}>
    <MemberPreviewPicture src={imageSrc} alt={name} selected={isSelected} />
    <MemberPreviewName>
      <Textfit max={20} mode="single">
        {name}
      </Textfit>
    </MemberPreviewName>
  </MemberPreviewMember>
);

MemberPreview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MemberPreview;
