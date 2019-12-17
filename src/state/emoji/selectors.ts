import { createSelector } from 'reselect';
import { RootState } from '~/state/reducer';

const getEmoji = (state: RootState) => state.emoji;

export const getEmojis = createSelector([getEmoji], emoji => emoji.emojis);
