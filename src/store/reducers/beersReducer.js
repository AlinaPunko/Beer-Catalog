import actionTypes from 'store/actions/actionTypes';

const beers = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ADD_BEERS:
        return [
            ...state, ...action.beers
        ];
    default:
        return state;
    }
};
export default beers;
