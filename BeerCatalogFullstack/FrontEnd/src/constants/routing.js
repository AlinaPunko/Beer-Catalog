import SearchPage from 'components/search/SearchPage/SearchPage';
import FavouritesList from 'components/favouritesPage/FavouritesList/FavouritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/BeerDetailsPage';
import LoginPage from '../components/loginPage/LoginPage';
import RegisterPage from '../components/registerPage/RegisterPage';

export default {
    loginPage: {
        url: '/login',
        component: LoginPage
    },
    registerPage: {
        url: '/register',
        component: RegisterPage
    },
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
