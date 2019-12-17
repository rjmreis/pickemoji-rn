import { combineReducers } from 'redux';
import { counterReducer } from './counter/reducers';
import { emoji } from './emoji/reducers';

export const rootReducer = combineReducers({
  counterReducer,
  emoji,
});

export type RootState = ReturnType<typeof rootReducer>;
