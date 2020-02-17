import SearchPage from 'components/search/SearchPage/SearchPage';
import FavouritesList from 'components/favouritesPage/FavouritesList/FavouritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/BeerDetailsPage';
import SignInPage from 'components/SignInPage/SignInPage';
import SignUpPage from 'components/SignUpPage/SignUpPage';

export default {
    signInPage: {
        url: '/login',
        component: SignInPage
    },
    signUpPage: {
        url: '/join',
        component: SignUpPage
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
