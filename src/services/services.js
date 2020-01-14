import api from 'helpers/requestHelper';
import BeerShortInfo from 'models/beerShortInfoModel';

async function getAll() {
    const beers = await api.get('https:api.punkapi.com/v2/beers?per_page=80');
    const result = JSON.parse(beers);
    return result.map((beer) => new BeerShortInfo(beer));
}

async function getByID(id) {
    const beers = await api.get(`https://api.punkapi.com/v2/beers${id}`);
    return JSON.parse(beers);
}

export default {
    getAll,
    getByID
};
