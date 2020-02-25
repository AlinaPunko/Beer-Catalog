import api from 'helpers/requestHelper';

function signUp(data) {
    return api.post('https://localhost:44340/account/join', data);
}

export default {signUp}