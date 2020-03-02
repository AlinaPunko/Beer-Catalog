import api from 'helpers/requestHelper';
import BeerShortInfo from 'models/beerShortInfoModel';
import BeerInfo from 'models/beerInfoModel';
import serviceUrls from 'constants/serviceUrls';

async function getAll() {
    const beers = await api.get(serviceUrls.beerUrls.getAllBeers);
    return beers.map((beer) => new BeerShortInfo(beer));
}

async function getByID(id) {
    const beer = await api.get(serviceUrls.beerUrls.getBeerById(id));
    return new BeerInfo(beer[0]);
}

export default {
    getAll,
    getByID
};
