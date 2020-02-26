import api from 'helpers/requestHelper';

function signIn(data) {
    return api.post('https://localhost:44340/account/login', data);
}

export default { signIn };
