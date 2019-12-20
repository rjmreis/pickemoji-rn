import { LOAD_EMOJIS, SET_SKIN, EmojiActionTypes } from './actions';
import { IEmojiState } from './types';
import { getCatalog } from './parser';

const initialState: IEmojiState = {
  catalog: undefined,
  skinTone: 'none',
};

export const emoji = (state: IEmojiState = initialState, action: EmojiActionTypes) => {
  switch (action.type) {
    case LOAD_EMOJIS: {
      return {
        ...state,
        catalog: getCatalog(),
      };
    }
    case SET_SKIN: {
      return {
        ...state,
        skinTone: action.skinTone,
      };
    }
    default: {
      return state;
    }
  }
};
