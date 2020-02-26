import api from 'helpers/requestHelper';
import BeerShortInfo from 'models/beerShortInfoModel';
import BeerInfo from 'models/beerInfoModel';
import requestUrl from 'constants/requestUrl';

async function getAll() {
    const beers = await api.get(requestUrl.getAllBeers);
    return beers.map((beer) => new BeerShortInfo(beer));
}

async function getByID(id) {
    const beer = await api.get(requestUrl.getBeerById(id));
    return new BeerInfo(beer[0]);
}

export default {
    getAll,
    getByID
};
