import api from 'helpers/requestHelper';

async function login(data) {
    debugger;
    const result = await api.post('https://localhost:44340/account/login', data);
    debugger;
    return result;
}

export default {login}