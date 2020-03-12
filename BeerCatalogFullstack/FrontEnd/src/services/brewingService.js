import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(item) {
    const result = await api.post(serviceUrls.brewingUrls.addBrew, item);
    debugger;
    return result;
}

async function getBrewsByUserId(userId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByUserId, { userId });
    return result;
}

async function getBrewsByUserIdAndPreferences(userId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByUserId, { userId });
    return result;
}

async function deleteItem(item) {
    const result = await api.post(serviceUrls.brewingUrls.deleteBrew, item);
    return result;
}

export default {
    add, deleteItem, getBrewsByUserId, getBrewsByUserIdAndPreferences
};
