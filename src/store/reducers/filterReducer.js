
const filter = (state = { Alcohol: 14, InternationalBitternessUnits: 120, Color: 80 }, action) => {
    switch (action.type) {
    case 'SET_FILTER':
    {
        return {
            ...state,
            [action.filter.type]: Number.parseInt(action.filter.value, 10),
        };
    }
    default:
        return state;
    }
};
export default filter;
