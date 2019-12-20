import * as emojiDictionary from 'emoji-dictionary';
import { default as getSkinTone } from 'skin-tone';
import { Tone } from '~/state/emoji/types';

export const getEmoji = (emoji: string, skinTone?: string) => {
  const emojiUnicode = emojiDictionary.getUnicode(emoji);

  return skinTone ? getSkinTone(emojiUnicode, skinTone as Tone) : emojiUnicode;
};
