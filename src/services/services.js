import api from 'helpers/requestHelper';

async function getAllBeers() {
  const Beers = await api.get('https://api.punkapi.com/v2/beers');
  return JSON.parse(Beers);
}

async function getBeerByID(id) {
    const Beers = await api.get(`https://api.punkapi.com/v2/beers${id}`);
    return JSON.parse(Beers);
}

async function getRandomBeer() {
    const Beers = await api.get('https://api.punkapi.com/v2/beers/random');
    return JSON.parse(Beers);
}

export default {
  getAllBeers,
  getBeerByID,
  getRandomBeer,
};
