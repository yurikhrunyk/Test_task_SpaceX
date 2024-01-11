import { atom } from 'recoil';
import { Rocket } from '@/components/organisms/CardSection/CardSection';

import { CardData } from '../utils/types';

export const favoriteCardsState = atom<CardData[]>({
  key: 'favoriteCardsState',
  default: [],
});

export const rocketsListState = atom<Rocket[]>({
  key: 'rocketsList',
  default: [],
});