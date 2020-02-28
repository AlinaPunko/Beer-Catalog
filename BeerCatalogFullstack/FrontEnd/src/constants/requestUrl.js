export default {
    getAllBeers: 'https://api.punkapi.com/v2/beers?per_page=80',
    getBeerById: (id) => `https://api.punkapi.com/v2/beers/${id}`,
    addFavorite: '/FavoriteBeers/Add',
    getFavoritesByUserId: (userId) => `/FavoriteBeers/Get?userId=${userId}`,
    deleteFavorite: '/FavoriteBeers/Delete',
    signIn: '/Login/Login',
    signUp: '/Login/Register',
    signOut: '/Login/Logout',
    getUser: (id) => `/User/Get?id=${id}`,
    updateUser: '/User/Update'
};
