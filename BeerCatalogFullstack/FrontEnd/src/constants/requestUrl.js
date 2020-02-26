const requestUrl = {
    getAllBeers: 'https://api.punkapi.com/v2/beers?per_page=80',
    getBeerById: (id) => `https://api.punkapi.com/v2/beers/${id}`,
    addFavorite: 'https://localhost:44340/favorites/add',
    getFavoritesByUserId: (userId) => `https://localhost:44340/favorites/get?userId=${userId}`,
    deleteFavorite: 'https://localhost:44340/favorites/delete',
    signIn: 'https://localhost:44340/account/login',
    signUp: 'https://localhost:44340/account/join',
    signOut: 'https://localhost:44340/account/logout',
    getUser: (id) => `https://localhost:44340/account/profile?id=${id}`,
    updateUser: 'https://localhost:44340/account/profile'
};

export default requestUrl;
