import actionTypes from 'store/actions/actionTypes';

export const addBeers = (beers) => ({
    type: actionTypes.ADD_BEERS,
    beers
});

export const setFilter = (filter) => ({
    type: actionTypes.SET_FILTER,
    filter
});

export const setFilterByName = (searchQuery) => ({
    type: actionTypes.SET_FILTER_BY_NAME,
    searchQuery
});
