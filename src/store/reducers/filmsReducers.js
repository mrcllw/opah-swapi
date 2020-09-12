import { ActionTypes } from '../actions';

const initialState = {
  films: []
};

export default function filmsReducers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_FILMS:
      return {
        ...state,
        films: action.payload
      };
    default:
      return state;
  }
}
