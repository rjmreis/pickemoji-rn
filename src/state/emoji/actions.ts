import { LOAD_EMOJIS, EmojiActionTypes } from './types';

export const fetchEmojis = (): EmojiActionTypes => ({
  type: LOAD_EMOJIS,
});
