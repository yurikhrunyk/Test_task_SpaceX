import React from 'react';
import styled from 'styled-components';

import { FavTitle } from '../../atoms/Title/Title';

import background from '../../../assets/images/favBack.png';

const FavBackground = () => {
  return (
    <FavBackgroundContainer>
      <FavTitleWrapper>
        <FavTitle />
      </FavTitleWrapper>
    </FavBackgroundContainer>
  );
};

const FavBackgroundContainer = styled.div`
  height: 440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.64;
    background-color: #1e1e1e;
    z-index: 1;
  }
`;

const FavTitleWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export default FavBackground;
