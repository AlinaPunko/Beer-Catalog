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
    brewUrls: {
        addBrew: '/Brews/Add',
        deleteBrew: (id) => `/Brews/Delete?id=${id}`,
        updateBrew: '/Brews/Update',
        getAllBrews: '/Brews/Get',
        getUserBrews: (id) => `/Brews/Get?userId=${id}`,
        addComment: '/Brews/Comments/Add',
        rateBrew: '/Brews/Rate'
    }
};
