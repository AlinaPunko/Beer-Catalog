import api from 'helpers/requestHelper';

async function getUser(id) {
    const user = await api.get(`https://localhost:44340/account/profile?id=${id}`);
    user.id = id;
    return user;
}

async function updateUser(user) {
    return await api.put('https://localhost:44340/account/profile', user);
}

export default {getUser, updateUser}