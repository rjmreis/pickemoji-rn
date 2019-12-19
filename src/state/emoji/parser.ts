import nodeEmoji from 'node-emoji';
import * as emojis from '~/resources/emojis.json';

export const getCatalog = () => {
  const categories = emojis.categories.map(category => ({
    id: category.id,
    name: category.name,
    subCategories: category.subCategories.map(subCategory => ({
      id: subCategory.id,
      name: subCategory.name,
      emojis: subCategory.emojis.filter(emoji => hasValidEmoji(emoji)),
    })),
  }));

  return {
    categories,
    list: emojis.list.filter(emoji => hasValidEmoji(emoji)),
  };
};

const hasValidEmoji = (emoji: string) => nodeEmoji.hasEmoji(emoji);
