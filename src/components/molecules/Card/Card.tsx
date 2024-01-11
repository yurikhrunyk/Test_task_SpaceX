import React from 'react';
import styled from 'styled-components';

import { useSetRecoilState, useRecoilValue } from 'recoil';

import { favoriteCardsState } from '../../../recoil/atom';
import { CardButton } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

import heartIcon from '../../../assets/images/blackheart.png';
import deleteIcon from '../../../assets/images/delete.png';

export interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  onAddToFavorites?: () => void;
  onDeleteFromFavorites?: () => void;
  isFavorite?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  onAddToFavorites,
  onDeleteFromFavorites,
  isFavorite,
}) => {
  const setFavoriteCards = useSetRecoilState(favoriteCardsState);
  const favoriteCards = useRecoilValue(favoriteCardsState);

  const handleFavoriteClick = () => {
    if (isFavorite && onDeleteFromFavorites) {
      onDeleteFromFavorites();
    } else if (!isFavorite && onAddToFavorites) {
      onAddToFavorites();
    }
  };

  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Card Image" />

      <CardContent>
        <CardText>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardText>

        <ButtonSection>
          <CardButton text="Buy" />
          {isFavorite ? (
            <Icon imgUrl={deleteIcon} handleClick={handleFavoriteClick} />
          ) : (
            <Icon imgUrl={heartIcon} handleClick={handleFavoriteClick} />
          )}
        </ButtonSection>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 411px;
  height: 572px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #d3eaff;
`;

const CardImage = styled.img`
  height: 296px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 0;
`;

const CardText = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #1e1e1e;
  font-size: 24px;
  font-family: Syne;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardSubtitle = styled.p`
  margin: 0;
  color: #556b84;
  font-size: 15px;
  font-family: Lato;
  font-weight: 300;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default Card;
