import React from 'react';
import { Route } from 'react-router-dom';

import SearchPage from 'components/SearchPage/SearchPage';
import FavouritesList from 'components/FavouritesList/FavouritesList';
import BeerDetailsPage from 'components/BeerDetailsPage/BeerDetailsPage';
import routeURL from 'constants/routeURL';

export default class Routing extends React.Component {
    render() {
        return (
            <>
                <Route
                    exact
                    path={routeURL.routeURL.searchPageURL}
                    component={SearchPage}
                />
                <Route
                    exact
                    path={routeURL.routeURL.favouritePageURL}
                    component={FavouritesList}
                />
                <Route
                    exact
                    path={routeURL.routeURL.beerDetailsPageURL}
                    component={BeerDetailsPage}
                />
            </>
        );
    }
}
