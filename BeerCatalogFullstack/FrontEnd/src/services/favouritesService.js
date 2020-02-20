import api from 'helpers/requestHelper';

async function add(userId, item) {
    const {id, name, tagline, imageUrl} = item;
    const result = await api.post('https://localhost:44340/favorites/add', {userId, id, name, tagline, imageUrl});
    return result;
}

async function getItems(userId) {
    const result = await api.get(`https://localhost:44340/favorites/get?userId=${userId}`);
    return result;
}

async function deleteItem(userId, item) {
    const {id, name, tagline, imageUrl} = item;
    const result = await api.post('https://localhost:44340/favorites/delete', {userId, id, name, tagline, imageUrl});
    return result;
}

export default {
    add, deleteItem, getItems
};
