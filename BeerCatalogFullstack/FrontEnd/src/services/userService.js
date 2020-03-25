import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';


function getUser(userId) {
    return api.get(serviceUrls.userUrls.getUser, { userId });
}

async function getPreferedBrews(userId) {
    const result = await api.get(serviceUrls.userUrls.getPreferedBrews, { userId });
    return result;
}

function updateUser(user) {
    return api.put(serviceUrls.userUrls.updateUser, user);
}

function signOut() {
    return api.get(serviceUrls.userUrls.signOut);
}

export default {
    getUser, getPreferedBrews, updateUser, signOut
};
