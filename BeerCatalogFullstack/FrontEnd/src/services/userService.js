import api from 'helpers/requestHelper';

async function getUser(id) {
    const user = await api.post('https://localhost:44340/account/profile', id);
    user.id = id;
    return user;
}

async function updateUser(user) {
    const result = await api.put('https://localhost:44340/account/profile', user);
    return result;
}

export default {getUser, updateUser}