import api from 'helpers/requestHelper';
import BeerShortInfo from 'models/beerShortInfoModel';
import BeerInfo from 'models/beerInfoModel';
import serviceUrls from 'constants/serviceUrls';
import urlHelper from 'helpers/urlHelper';

async function getAll() {
    const beers = await api.get(serviceUrls.beerUrls.getAllBeers);
    return beers.map((beer) => new BeerShortInfo(beer));
}

async function getByID(id) {
    const url = urlHelper.getUrlWithParameter(serviceUrls.beerUrls.getBeerById, /:id/, id);
    const beer = await api.get(url);
    return new BeerInfo(beer[0]);
}

export default {
    getAll,
    getByID
};
