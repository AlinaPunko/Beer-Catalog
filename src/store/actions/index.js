import actionTypes from 'store/actions/actionTypes';

export const addBeers = (beers) => ({
    type: actionTypes.ADD_BEERS,
    beers,
});

export const setVisibilityFilter = (filter) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter,
});

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FILTERED: 'SHOW_FILTERED'
};
