import { combineReducers } from 'redux';

import characters from './charactersReducers';

const reducers = combineReducers({
  characters
});

export default reducers;
