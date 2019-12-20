interface EmojiDictionary {
  getUnicode: (value: string) => string;
  getName: (value: string) => string;
}

declare const emoji_dictionary: EmojiDictionary;

declare module 'emoji-dictionary' {
  export = emoji_dictionary;
}
