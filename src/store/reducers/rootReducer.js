import { combineReducers } from 'redux';

import beers from './beersReducer';
import filter from './filterReducer';

export default combineReducers({
    beers,
    filter
});
