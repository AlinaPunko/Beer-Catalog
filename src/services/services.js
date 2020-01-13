import api from 'helpers/requestHelper';

async function getAll() {
    const beers = await api.get('https:api.punkapi.com/v2/beers');
    return JSON.parse(beers);
}

async function getByID(id) {
    const beers = await api.get(`https://api.punkapi.com/v2/beers${id}`);
    return JSON.parse(beers);
}


async function getPage(page) {
    const beers = await api.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);
    return JSON.parse(beers);
}

export default {
    getAll,
    getByID,
    getPage,
};
