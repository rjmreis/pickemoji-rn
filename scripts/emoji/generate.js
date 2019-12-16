const { getCategorizeGithubEmojiIds } = require('./fetch');
const { generateCategorizedObject } = require('./parser');

async function generate() {
  return generateCategorizedObject(await getCategorizeGithubEmojiIds());
}

if (require.main === /** @type {unknown} */ (module)) {
  generate().then(cheatSheet => console.log(cheatSheet));
} else {
  module.exports = generate;
}
