import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { favoriteCardsState } from '../../../recoil/atom';
import { CardData } from '../../../utils/types';

import Card from '../../molecules/Card/Card';
import { ClearAllButton } from '../../atoms/Button/Button';

const FavCards: React.FC = () => {
  const [favoriteCards, setFavoriteCards] =
    useRecoilState<CardData[]>(favoriteCardsState);

  const handleDeleteFromFavorites = (card: CardData) => {
    const updatedFavoriteCards = favoriteCards.filter(
      (favoriteCard) => favoriteCard.id !== card.id
    );
    setFavoriteCards(updatedFavoriteCards);
  };

  const clearFavoriteState = () => {
    setFavoriteCards([]);
  };

  return (
    <SectionContainer>
      {favoriteCards.length === 0 ? (
        <EmptySection>
          <EmptyContainer />
          <EmptyContainer />
          <EmptyContainer />
        </EmptySection>
      ) : (
        <>
          <ButtonContainer>
            <ClearAllButton onClick={clearFavoriteState} />
          </ButtonContainer>

          <CardsContainer>
            {favoriteCards.map((card: CardData, index: number) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                subtitle={card.subtitle}
                onDeleteFromFavorites={() => handleDeleteFromFavorites(card)}
                isFavorite={true}
              />
            ))}
          </CardsContainer>
        </>
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 1281px;
  margin: 100px auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  margin: 40px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EmptySection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

const EmptyContainer = styled.div`
  width: 411px;
  height: 572px;

  border: 1px solid #d3eaff;
`;

export default FavCards;
