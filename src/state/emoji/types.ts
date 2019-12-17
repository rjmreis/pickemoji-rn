export const FETCH_EMOJIS = 'pickemoji/FETCH_EMOJIS';

export interface IEmojiSubCategories {
  id: string;
  name: string;
  emojis: string[];
}

export interface IEmojiCategories {
  id: string;
  name: string;
  subCategories: IEmojiSubCategories[];
}

export interface IEmojiCatalog {
  categories: IEmojiCategories[];
  list: string[];
}

export interface IEmojiState {
  catalog?: IEmojiCatalog;
}

interface FetchEmojisAction {
  type: typeof FETCH_EMOJIS;
}

export type EmojiActionTypes = FetchEmojisAction;
