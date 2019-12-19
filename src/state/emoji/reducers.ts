import { IEmojiState, LOAD_EMOJIS, EmojiActionTypes } from './types';
import { getCatalog } from './parser';

const initialState: IEmojiState = {
  catalog: undefined,
};

export const emoji = (state: IEmojiState = initialState, action: EmojiActionTypes) => {
  switch (action.type) {
    case LOAD_EMOJIS: {
      return {
        ...state,
        catalog: getCatalog(),
      };
    }

    default: {
      return state;
    }
  }
};
