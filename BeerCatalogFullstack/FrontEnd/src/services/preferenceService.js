import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(item) {
    const result = await api.post(serviceUrls.preferenceUrls.addPreference, item);
    return result;
}

async function deletePreference(item) {
    const result = await api.post(serviceUrls.preferenceUrls.deletePreference, item);
    return result;
}

async function getUserPreferences(userId) {
    const result = await api.get(serviceUrls.preferenceUrls.getUserPreferences, userId);
    return result;
}

async function getSuitablePreferences(input) {
    const result = await api.get(serviceUrls.preferenceUrls.getAutocompletionValues, input);
    return result;
}

export default {
    add, deletePreference, getUserPreferences, getSuitablePreferences
};
