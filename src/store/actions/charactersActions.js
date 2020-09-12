import { ActionTypes } from './';

export const setCharacters = characters => ({
  type: ActionTypes.SET_CHARACTERS,
  payload: characters
});

export const setCharacter = character => ({
  type: ActionTypes.SET_CHARACTER,
  payload: character
});
