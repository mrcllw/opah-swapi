import { ActionTypes } from '../actions';

const initialState = {
  films: [],
  film: {
    title: '',
    episode_id: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: []
  }
};

export default function filmsReducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_FILMS:
      return {
        ...state,
        films: action.payload
      };
    case ActionTypes.SET_FILM:
      return {
        ...state,
        film: action.payload
      };
    default:
      return state;
  }
}
