import api from 'helpers/requestHelper';

async function login(data) {
    return await api.post('https://localhost:44340/account/login', data);
}

export default {login}