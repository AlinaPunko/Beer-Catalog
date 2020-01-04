const beers = (state = [], action) => {
    switch (action.type) {
    case 'ADD_BEERS':
        return [
            ...state,
            {
                id: action.id,
                beer: action.beer,
            },
        ];
    default:
        return state;
    }
};
export default beers;
