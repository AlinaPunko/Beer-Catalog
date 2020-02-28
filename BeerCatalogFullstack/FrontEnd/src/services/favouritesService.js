import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(userId, item) {
    const {
        id, name, tagline, imageUrl
    } = item;
    const result = await api.post(serviceUrls.favoriteBeersUrls.addFavorite, {
        userId, id, name, tagline, imageUrl
    });
    return result;
}

async function getItems(userId) {
    const result = await api.get(serviceUrls.favoriteBeersUrls.getFavoritesByUserId(userId));
    return result;
}

async function deleteItem(userId, item) {
    const {
        id, name, tagline, imageUrl
    } = item;
    const result = await api.post(serviceUrls.favoriteBeersUrls.deleteFavorite, {
        userId, id, name, tagline, imageUrl
    });
    return result;
}

export default {
    add, deleteItem, getItems
};
