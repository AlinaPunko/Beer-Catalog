import api from 'helpers/requestHelper';
import BeerShortInfo from 'models/beerShortInfoModel';
import BeerInfo from 'models/beerInfoModel';

async function getAll() {
    const beers = await api.get('https://api.punkapi.com/v2/beers?per_page=80');
    debugger;
    return beers.map((beer) => new BeerShortInfo(beer));
}

async function getByID(id) {
    const beer = await api.get(`https://api.punkapi.com/v2/beers/${id}`);
    return new BeerInfo(beer[0]);
}

export default {
    getAll,
    getByID
};
