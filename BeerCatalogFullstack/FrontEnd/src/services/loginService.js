import api from 'helpers/requestHelper';

async function login(data) {
    debugger;
    const userId = await api.post('https://localhost:44340/account/login', data);
    return userId;
}

export default {login}