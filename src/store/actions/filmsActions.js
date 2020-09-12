import { ActionTypes } from './';

export const setFilms = films => ({
  type: ActionTypes.SET_FILMS,
  payload: films
});

export const setFilm = film => ({
  type: ActionTypes.SET_FILM,
  payload: film
});

export const setLoadingFilms = () => ({
  type: ActionTypes.SET_LOADING_FILMS,
});
