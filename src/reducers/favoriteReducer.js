import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_DISPLAY_FAVORITE,
} from '../actions/favoriteActions';

const initialState = {
  favorites: [
    {
      id: 0,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      metascore: 100,
      genre: 'Drama',
      description:
        'War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.',
    },
    {
      id: 0,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      metascore: 100,
      genre: 'Drama',
      description:
        'War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.',
    },
    {
      id: 0,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      metascore: 100,
      genre: 'Drama',
      description:
        'War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.',
    },
  ],
  displayFavorites: true,
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
    case REMOVE_FAVORITE:
      return state;
    case TOGGLE_DISPLAY_FAVORITE:
      return state;
    default:
      return state;
  }
};
