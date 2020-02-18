import api from 'helpers/requestHelper';

async function signUp(data) {
    debugger;
    const userId = await api.post('https://localhost:44340/account/join', data);
    debugger;
    return userId;
}

export default {signUp}