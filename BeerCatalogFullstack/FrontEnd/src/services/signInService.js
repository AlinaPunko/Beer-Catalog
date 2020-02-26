import api from 'helpers/requestHelper';
import requestUrl from 'constants/requestUrl';


function signIn(data) {
    return api.post(requestUrl.signIn, data);
}

export default { signIn };
