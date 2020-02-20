import api from 'helpers/requestHelper';

async function signUp(data) {
    return await api.post('https://localhost:44340/account/join', data);
}

export default {signUp}