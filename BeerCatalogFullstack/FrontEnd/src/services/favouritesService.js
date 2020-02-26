import api from 'helpers/requestHelper';
import requestUrl from 'constants/requestUrl';

async function add(userId, item) {
    const {
        id, name, tagline, imageUrl
    } = item;
    const result = await api.post(requestUrl.addFavorite, {
        userId, id, name, tagline, imageUrl
    });
    return result;
}

async function getItems(userId) {
    const result = await api.get(requestUrl.getFavoritesByUserId(userId));
    return result;
}

async function deleteItem(userId, item) {
    const {
        id, name, tagline, imageUrl
    } = item;
    const result = await api.post(requestUrl.deleteFavorite, {
        userId, id, name, tagline, imageUrl
    });
    return result;
}

export default {
    add, deleteItem, getItems
};
