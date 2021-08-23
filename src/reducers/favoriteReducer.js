import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_DISPLAY_FAVORITE,
} from '../actions/favoriteActions';
import movies from '../data';
const initialState = {
  favorites: [],
  displayFavorites: true,
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(
          movies.filter((item) => item.id === action.payload)
        ),
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_DISPLAY_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};
// get movies array, mao through it, if it has such id, append it to favorites array
