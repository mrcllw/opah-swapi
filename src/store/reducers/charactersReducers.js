import { ActionTypes } from '../actions';

const initialState = {
  page: 1,
  total: 0,
  loading: true,
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
        characters: action.payload.characters,
        loading: false,
        page: state.page + 1,
        total: action.payload.total,
      };
    case ActionTypes.SET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false
      };
    case ActionTypes.SET_LOADING_CHARACTERS:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.SET_MORE_CHARACTERS:
      return {
        ...state,
        characters: [
          ...state.characters,
          ...action.payload
        ],
        loading: false,
        page: state.page + 1
      };
    default:
      return state;
  }
}
