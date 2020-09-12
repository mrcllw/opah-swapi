import { combineReducers } from 'redux';

import characters from './charactersReducers';
import films from './filmsReducers';

const reducers = combineReducers({
  characters,
  films
});

export default reducers;
