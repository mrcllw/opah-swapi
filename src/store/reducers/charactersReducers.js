import { ActionTypes } from '../actions';

const initialState = {
  characters: [],
  character: {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    films: []
  }
};

export default function charactersReducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    case ActionTypes.SET_CHARACTER:
      return {
        ...state,
        character: action.payload
      };
    default:
      return state;
  }
}
