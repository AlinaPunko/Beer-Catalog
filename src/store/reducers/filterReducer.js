import actionTypes from 'store/actions/actionTypes';

const filter = (state = {
    Alcohol: 14, InternationalBitternessUnits: 120, Color: 80, Name: ''
}, action) => {
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
            Name: action.name
        };
    }
    default:
        return state;
    }
};
export default filter;
