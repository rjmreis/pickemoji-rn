export const LOAD_EMOJIS = 'pickemoji/LOAD_EMOJIS';
export const SET_SKIN = 'pickemoji/SET_SKIN';

interface FetchEmojisAction {
  type: typeof LOAD_EMOJIS;
}

interface SetSkinAction {
  type: typeof SET_SKIN;
  skinTone: string;
}

export type EmojiActionTypes = FetchEmojisAction | SetSkinAction;

export const fetchEmojis = (): FetchEmojisAction => ({
  type: LOAD_EMOJIS,
});

export const setSkin = (skinTone: string): SetSkinAction => ({
  type: SET_SKIN,
  skinTone,
});
