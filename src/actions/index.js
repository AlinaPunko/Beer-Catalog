let nextBeerId = 0;
export const addBeer = (beer) => ({
    type: 'ADD_BEER',
    id: nextBeerId++,
    beer,
});
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});
export const VisibilityFilters = {
    // SHOW_ALL: 'SHOW_ALL',
    // SHOW_COMPLETED: 'SHOW_COMPLETED',
    // SHOW_ACTIVE: 'SHOW_ACTIVE',
};
