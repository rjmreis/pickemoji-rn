import AsyncStorage from '@react-native-community/async-storage';
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './reducers';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['emoji'],
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const debug = process.env.NO_DEBUG !== '1';
const composeFunction =
  (debug &&
    // @ts-ignore
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
  compose;
const store = createStore(persistedReducer, {}, composeFunction);

// Middleware: Redux Persistor
const persistor = persistStore(store);

export { store, persistor };
