export default {
    beerUrls: {
        getAllBeers: 'https://api.punkapi.com/v2/beers?per_page=80',
        getBeerById: 'https://api.punkapi.com/v2/beers'
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
        getAllBrews: '/Brew/Get',
        getUserBrews: '/Brew/Get',
        addComment: '/Brew/Comments/Add',
        rateBrew: '/Brew/Rate'
    }
};
