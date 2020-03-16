import SearchPage from 'components/search/SearchPage/searchPage';
import FavoritesList from 'components/favoritesPage/FavoritesList/favoritesList';
import BeerDetailsPage from 'components/detailsPage/BeerDetailsPage/beerDetailsPage';
import SignInPage from 'components/SignInPage/signInPage';
import SignUpPage from 'components/SignUpPage/signUpPage';
import ProfileSection from 'components/profilePage/ProfileSection/profileSection';
import BrewsList from 'components/BrewsPage/BrewsList/brewsList';
import BrewingInfoPage from 'components/brewingInfoPage/BrewingInfoSection/brewingInfoSection';

export default {
    signInPage: {
        url: '/login',
        component: SignInPage
    },
    signUpPage: {
        url: '/join',
        component: SignUpPage
    },
    favoritesList: {
        url: '/favorites',
        component: FavoritesList
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
    brewingInfoPage: {
        url: '/brewinfo/:beerId/:brewId',
        component: BrewingInfoPage
    },
    brewsList: {
        url: '/brews',
        component: BrewsList
    }
};
