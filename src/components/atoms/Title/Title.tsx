import React from 'react';
import styled from 'styled-components';

export const MainTitle = () => {
  return (
    <MainTitleContainer>
      <H5>the space is waiting for</H5>
      <H1>you</H1>
    </MainTitleContainer>
  );
};

export const FavTitle = () => {
  return (
    <FavTitleContainer>
      <H3>favourites</H3>
    </FavTitleContainer>
  );
};

const MainTitleContainer = styled.div`
  text-align: center;
  color: #fff;
  font-family: Syne;
  text-transform: uppercase;
  margin: 170px 0 40px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const H5 = styled.h5`
  margin: 0;
  font-size: 48px;
  font-weight: 800;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 310px;
  font-weight: 800;
`;

const FavTitleContainer = styled.div`
  text-align: center;
  color: #fff;
  font-family: Syne;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
`;
