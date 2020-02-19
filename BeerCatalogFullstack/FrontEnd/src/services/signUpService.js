import api from 'helpers/requestHelper';

async function signUp(data) {
    debugger;
    const result = await api.post('https://localhost:44340/account/join', data);
    return result;
}

export default {signUp}