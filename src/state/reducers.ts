import { combineReducers } from 'redux';
import { emoji } from './emoji/reducer';

export const rootReducer = combineReducers({
  emoji,
});

export type RootState = ReturnType<typeof rootReducer>;
