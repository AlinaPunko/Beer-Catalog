const beers = (state = [], action) => {
    switch (action.type) {
    case 'ADD_BEER':
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
