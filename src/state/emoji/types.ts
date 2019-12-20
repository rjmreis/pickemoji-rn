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
  skinTone: string;
}

export type Tone = 'none' | 'white' | 'creamWhite' | 'lightBrown' | 'brown' | 'darkBrown';
