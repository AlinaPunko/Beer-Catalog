export default {
    beerUrls: {
        getAllBeers: 'https://api.punkapi.com/v2/beers?per_page=80',
        getBeerById: (id) => `https://api.punkapi.com/v2/beers/${id}`
    },
    favoriteBeerUrls: {
        addFavorite: '/FavoriteBeers/Add',
        getFavoritesByUserId: (userId) => `/FavoriteBeers/Get?userId=${userId}`,
        deleteFavorite: '/FavoriteBeers/Delete'
    },
    loginUrls: {
        signIn: '/Login/Login',
        signUp: '/Login/Register',
        signOut: '/Login/Logout'
    },
    userUrls: {
        getUser: (id) => `/User/Get?id=${id}`,
        updateUser: '/User/Update'
    },
    preferenceUrls: {
        addPreference: 'Preference/Add',
        deletePreference: 'Preference/Delete',
        getUserPreferences: (id) => `Preference/Get?userId=${id}`,
        getAutocompletionValues: (input) => `Preference/GetAutocompletionValues?input=${input}`
    },
    brewUrls: {
        addBrew: '/Brew/Add',
        deleteBrew: (id) => `/Brew/Delete?id=${id}`,
        updateBrew: '/Brew/Update',
        getAllBrews: '/Brew/Get',
        getUserBrews: (id) => `/Brew/Get?userId=${id}`,
        addComment: '/Brew/Comments/Add',
        rateBrew: '/Brew/Rate'
    }
};
