import api from 'helpers/requestHelper';
import requestUrl from 'constants/requestUrl';


function getUser(id) {
    return api.get(requestUrl.getUser(id));
}

function updateUser(user) {
    return api.put(requestUrl.updateUser, user);
}

function signOut() {
    return api.get(requestUrl.signOut);
}

export default { getUser, updateUser, signOut };
