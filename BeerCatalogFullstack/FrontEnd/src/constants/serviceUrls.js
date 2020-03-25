export default {
    beerUrls: {
        getAllBeers: 'https://api.punkapi.com/v2/beers?per_page=80',
        getBeerById: 'https://api.punkapi.com/v2/beers/:id'
    },
    favoriteBeerUrls: {
        addFavorite: '/FavoriteBeer/Add',
        getFavoritesByUserId: '/FavoriteBeer/Get',
        deleteFavorite: '/FavoriteBeer/Delete'
    },
    loginUrls: {
        signIn: '/Login/Login',
        signUp: '/Login/Register',
        signOut: '/Login/Logout'
    },
    userUrls: {
        getUser: '/User/Get',
        getPreferedBrews: '/User/GetPreferedBrews',
        updateUser: '/User/Update'
    },
    preferenceUrls: {
        addPreference: '/Preference/Add',
        deletePreference: '/Preference/Delete',
        getUserPreferences: '/Preference/Get',
        getAutocompletionValues: '/Preference/GetAutocompletionValues'
    },
    brewingUrls: {
        addBrew: '/Brew/Add',
        deleteBrew: '/Brew/Delete',
        updateBrew: '/Brew/Update',
        getBrewById: '/Brew/GetById',
        getBrewsByBeerId: '/Brew/GetByBeerId',
        getBrewsByUserId: '/Brew/GetByUserId',
        getAllBrews: '/Brew/Get',
        addComment: '/Brew/AddComment',
        rateBrew: '/Brew/Rate',
        getUserRates: '/Brew/GetUserRates',
        getRating: '/Brew/GetRating',
        getComments: '/Brew/GetComments'
    }
};
