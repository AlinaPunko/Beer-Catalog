import api from 'helpers/requestHelper';

function getUser(id) {
    return api.get(`https://localhost:44340/account/profile?id=${id}`);
}

function updateUser(user) {
    return api.put('https://localhost:44340/account/profile', user);
}

export default { getUser, updateUser };
