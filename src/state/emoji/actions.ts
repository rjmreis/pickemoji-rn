import { FETCH_EMOJIS, EmojiActionTypes } from './types';

export const fetchEmojis = (): EmojiActionTypes => ({
  type: FETCH_EMOJIS,
});
