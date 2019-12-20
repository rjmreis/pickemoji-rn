import { createSelector } from 'reselect';
import { RootState } from '~/state/reducers';
import { getIdFromProps } from '~/state/selectors';

const getEmoji = (state: RootState) => state.emoji;

const getCatalog = createSelector(getEmoji, emoji => emoji.catalog);

export const getCategories = createSelector(getCatalog, catalog =>
  catalog?.categories.map(category => ({
    id: category.id,
    name: category.name,
    ico: category.subCategories[0]?.emojis[0],
  })),
);

const findCategory = createSelector([getCatalog, getIdFromProps], (catalog, id) =>
  catalog?.categories.find(category => category.id === id),
);

export const getSubCategories = createSelector(findCategory, catalog =>
  catalog?.subCategories
    .filter(subCategory => subCategory.emojis.length > 0)
    .map(subCategory => ({
      id: subCategory.id,
      name: subCategory.name,
      ico: subCategory.emojis[0],
      emojis: subCategory.emojis,
    })),
);

export const getSkinTone = createSelector(getEmoji, emoji => emoji.skinTone);
