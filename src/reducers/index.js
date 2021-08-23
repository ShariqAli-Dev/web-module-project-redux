import { createStore, combineReducers } from 'redux';

import { movieReducer } from './movieReducer';
import { favoriteReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  movieReducer: movieReducer,
  favoriteReducer: favoriteReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
