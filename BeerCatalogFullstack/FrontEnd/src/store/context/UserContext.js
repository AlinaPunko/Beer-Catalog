import React from 'react';

export const UserContext = React.createContext({
    userId: '',
    favouriteBeers:[],
    setUserId: () => {},
    setFavouriteBeers: () => []
});