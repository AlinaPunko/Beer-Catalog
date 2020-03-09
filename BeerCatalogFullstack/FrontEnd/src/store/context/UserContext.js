import React from 'react';

export const UserContext = React.createContext({
    userId: '',
    favoriteBeers: [],
    setUserId: () => {},
    setFavoriteBeers: () => []
});
