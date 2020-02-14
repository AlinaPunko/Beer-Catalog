import SearchPage from 'components/search/SearchPage/SearchPage';
import FavouritesList from 'components/favouritesPage/FavouritesList/FavouritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/BeerDetailsPage';

export default {
    favouritesList: {
        url: '/favourites',
        component: FavouritesList
    },
    searchPage: {
        url: '/',
        component: SearchPage
    },
    beerDetailsPage: {
        url: '/details/:id',
        component: BeerDetailsPage
    }
};
