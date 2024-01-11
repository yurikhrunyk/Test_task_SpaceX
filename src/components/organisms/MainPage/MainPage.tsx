import React from 'react';
import styled from 'styled-components';

import Banner from '../../molecules/Banner/Banner';
import CardsSection from '../CardSection/CardSection';

const MainPage = () => {
  return (
    <MainPageContainer>
      <Banner />
      <CardsSection />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div``;

export default MainPage;
