import { ActionTypes } from './';

export const setCharacters = characters => ({
  type: ActionTypes.SET_CHARACTERS,
  payload: characters
});
