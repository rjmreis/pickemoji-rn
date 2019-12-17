import { createSelector } from 'reselect';
import { RootState } from '~/state/reducer';

const getEmoji = (state: RootState) => state.emoji;

export const getEmojis = createSelector(getEmoji, emoji => emoji.catalog);

export const getCategories = createSelector(getEmojis, emoji =>
  emoji?.categories.map(category => ({
    id: category.id,
    name: category.name,
    ico: category.subCategories[0]?.emojis[0],
  })),
);
