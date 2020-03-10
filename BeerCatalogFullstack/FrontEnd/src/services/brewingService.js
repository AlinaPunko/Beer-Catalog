import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(item) {
    const result = await api.post(serviceUrls.brewingUrls.addBrew, item);
    return result;
}

async function getBrewsByUserId(userId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByUserId, userId);
    return result;
}

async function getBrewsByUserIdAndPreferences() {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByUserId);
    return result;
}

async function deleteItem(item) {
    const result = await api.post(serviceUrls.brewingUrls.deleteBrew, item);
    return result;
}

export default {
    add, deleteItem, getBrewsByUserId, getBrewsByUserIdAndPreferences
};
