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

async function update(item) {
    const result = await api.put(serviceUrls.brewingUrls.updateBrew, item);
    return result;
}

async function deleteItem(item) {
    const result = await api.deleteMethod(serviceUrls.brewingUrls.deleteBrew, item);
    return result;
}

async function rate(item) {
    const result = await api.post(serviceUrls.brewingUrls.rateBrew, item);
    return result;
}

async function getUserRates(brewInfo) {
    const result = await api.get(serviceUrls.brewingUrls.getUserRates, brewInfo);
    return result;
}

async function getRating(brewId) {
    const result = await api.get(serviceUrls.brewingUrls.getRating, { brewId });
    return result;
}

async function addComment(comment) {
    const result = await api.post(serviceUrls.brewingUrls.addComment, comment);
    return result;
}

async function getComments(brewId) {
    const result = await api.get(serviceUrls.brewingUrls.getComments, { brewId });
    return result;
}

export default {
    add,
    deleteItem,
    update,
    getBrewsByUserId,
    getBrewsByBeerId,
    getBrewById,
    rate,
    getUserRates,
    getRating,
    addComment,
    getComments
};
