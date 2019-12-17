const columns = 2;
const blacklist = ['github-custom-emoji'];

/**
 * @param {{ [category: string]: { [subcategory: string]: GithubEmojiIds } }} categorizedGithubEmojiIds
 */
function generateCategorizedObject(categorizedGithubEmojiIds) {
  let result = {
    categories: [],
    list: [],
  };

  const categories = Object.keys(categorizedGithubEmojiIds);

  for (const category of categories) {
    const categoryId = getHeaderId(category);

    let _category = {
      id: categoryId,
      name: category,
      subCategories: [],
    };

    const subcategorizeGithubEmojiIds = categorizedGithubEmojiIds[category];
    const subcategories = Object.keys(subcategorizeGithubEmojiIds);

    for (const subcategory of subcategories) {
      const subcategoryId = getHeaderId(subcategory);
      const githubEmojiIds = subcategorizeGithubEmojiIds[subcategory];

      let emojis = [];
      for (let i = 0; i < githubEmojiIds.length; i += columns) {
        for (let j = 0; j < columns; j++) {
          if (i + j < githubEmojiIds.length) {
            const emojiIds = githubEmojiIds[i + j];
            const emojiId = emojiIds[0];
            emojis.push(`:${emojiId.toString()}:`);
            for (let k = 1; k < emojiIds.length; k++) {
              emojis.push(`:${emojiIds[k].toString()}:`);
            }
          }
        }
      }

      _category.subCategories.push({
        id: subcategoryId,
        name: subcategory,
        emojis,
      });

      result.list.push(...emojis);
    }

    if (!blacklist.includes(categoryId)) {
      result.categories.push(_category);
    }
  }

  return JSON.stringify(result);
}

/**
 * @param {string} header
 */
function getHeaderId(header) {
  return header
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, ' ')
    .replace(/\s+/g, '-');
}

module.exports = {
  generateCategorizedObject,
};
