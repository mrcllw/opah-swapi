import { ActionTypes } from './';

export const setFilms = films => ({
  type: ActionTypes.SET_FILMS,
  payload: films
});
