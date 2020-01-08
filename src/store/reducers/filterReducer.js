import { Filters } from 'store/actions';

const filter = (state = Filters.SHOW_FILTERED, action) => {
    switch (action.type) {
    case 'SET_FILTER':
        return action.filter;
    default:
        return state;
    }
};
export default filter;
