import actionTypes from 'store/actions/actionTypes';

const defaultState = {
    alcohol: 14, internationalBitternessUnits: 120, color: 80, searchQuery: ''
};

const filter = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.SET_FILTER:
    {
        return {
            ...state,
            [action.filter.type]: Number.parseInt(action.filter.value, 10),
        };
    }
    case actionTypes.SET_FILTER_BY_NAME:
    {
        return {
            ...state,
            searchQuery: action.searchQuery
        };
    }
    default:
        return state;
    }
};
export default filter;
