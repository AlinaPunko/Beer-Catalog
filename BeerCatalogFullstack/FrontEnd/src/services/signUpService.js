import api from 'helpers/requestHelper';
import requestUrl from 'constants/requestUrl';


function signUp(data) {
    return api.post(requestUrl.signUp, data);
}

export default { signUp };
