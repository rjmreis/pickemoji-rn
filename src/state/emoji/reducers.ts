import { FETCH_EMOJIS, EmojiActionTypes } from './types';
import * as emojis from '~/resources/emojis.json';

const initialState = {
  emojis: {},
};

export const emoji = (state = initialState, action: EmojiActionTypes) => {
  switch (action.type) {
    case FETCH_EMOJIS: {
      return {
        ...state,
        emojis,
      };
    }

    default: {
      return state;
    }
  }
};
