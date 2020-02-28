import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

function signIn(data) {
    return api.post(serviceUrls.loginUrls.signIn, data);
}

export default { signIn };
