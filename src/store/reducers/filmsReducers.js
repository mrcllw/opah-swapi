import { ActionTypes } from '../actions';

const initialState = {
  loading: true,
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
        films: action.payload,
        loading: false
      };
    case ActionTypes.SET_FILM:
      return {
        ...state,
        film: action.payload,
        loading: false
      };
    case ActionTypes.SET_LOADING_FILMS:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
