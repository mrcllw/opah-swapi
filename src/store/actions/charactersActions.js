import { ActionTypes } from './';

export const setCharacters = characters => ({
  type: ActionTypes.SET_CHARACTERS,
  payload: characters
});

export const setCharacter = character => ({
  type: ActionTypes.SET_CHARACTER,
  payload: character
});

export const setLoadingCharacters = () => ({
  type: ActionTypes.SET_LOADING_CHARACTERS,
});

export const setMoreCharacters = characters => ({
  type: ActionTypes.SET_MORE_CHARACTERS,
  payload: characters
});
