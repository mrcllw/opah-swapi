import { ActionTypes } from '../actions';

const initialState = {
  characters: []
};

export default function charactersReducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
}
