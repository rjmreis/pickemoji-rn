import { IEmojiState, LOAD_EMOJIS, EmojiActionTypes } from './types';
import * as emojis from '~/resources/emojis.json';

const initialState: IEmojiState = {
  catalog: undefined,
};

export const emoji = (state: IEmojiState = initialState, action: EmojiActionTypes) => {
  switch (action.type) {
    case LOAD_EMOJIS: {
      return {
        ...state,
        catalog: {
          categories: emojis.categories,
          list: emojis.list,
        },
      };
    }

    default: {
      return state;
    }
  }
};
