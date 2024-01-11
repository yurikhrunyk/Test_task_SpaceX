import React from 'react';
import styled from 'styled-components';

import FavBackground from '../../molecules/FavBackground/FavBackgound';
import FavCards from '../FavCards/FavCards';

const FavouritesPage = () => {
  return (
    <FavPageContainer>
      <FavBackground />
      <FavCards />
    </FavPageContainer>
  );
};

const FavPageContainer = styled.div``;

export default FavouritesPage;
