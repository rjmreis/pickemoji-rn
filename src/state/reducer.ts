import { combineReducers } from 'redux';
import { emoji } from './emoji/reducers';

export const rootReducer = combineReducers({
  emoji,
});

export type RootState = ReturnType<typeof rootReducer>;
