import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(item) {
    const result = await api.post(serviceUrls.brewingUrls.addBrew, item);
    return result;
}

async function getBrewById(id) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewById, { id });
    return result;
}

async function getBrewsByUserId(userId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByUserId, { userId });
    return result;
}

async function getBrewsByBeerId(beerId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByBeerId, { beerId });
    return result;
}

async function getBrewsByUserPreferences(userId) {
    const result = await api.get(serviceUrls.brewingUrls.getBrewsByPreferences, { userId });
    return result;
}

async function update(item) {
    const result = await api.put(serviceUrls.brewingUrls.updateBrew, item);
    return result;
}

async function deleteItem(item) {
    const result = await api.post(serviceUrls.brewingUrls.deleteBrew, item);
    return result;
}

export default {
    add, deleteItem, update, getBrewsByUserId, getBrewsByUserPreferences, getBrewsByBeerId, getBrewById
};
