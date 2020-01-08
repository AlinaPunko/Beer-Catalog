const beers = (state = [], action) => {
    switch (action.type) {
    case 'ADD_BEERS':
        return [
            ...state,
            {
                beers: action.beers,
            },
        ];
    default:
        return state;
    }
};
export default beers;
