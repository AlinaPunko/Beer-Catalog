import SearchPage from 'components/search/SearchPage/searchPage';
import FavouritesList from 'components/favouritesPage/FavouritesList/favouritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/beerDetailsPage';
import SignInPage from 'components/SignInPage/signInPage';
import SignUpPage from 'components/SignUpPage/signUpPage';
import ProfilePage from 'components/ProfilePage/profilePage';

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
    },
    profilePage: {
        url: '/profile',
        component: ProfilePage
    }
};
