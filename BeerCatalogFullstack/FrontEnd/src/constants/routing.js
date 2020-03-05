import SearchPage from 'components/search/SearchPage/searchPage';
import FavouritesList from 'components/favouritesPage/FavouritesList/favouritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/beerDetailsPage';
import SignInPage from 'components/SignInPage/signInPage';
import SignUpPage from 'components/SignUpPage/signUpPage';
import ProfileSection from 'components/ProfilePage/ProfileSection/profileSection';
import BrewsList from 'components/BrewsPage/BrewsList/brewsList';

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
        component: ProfileSection
    },
    brewPage: {
        url: '/brews',
        component: BrewsList
    },
    brewsList: {
        url: '/brews',
        component: BrewsList
    }
};
