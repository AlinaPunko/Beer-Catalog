import React from 'react';
import { Route } from 'react-router-dom';

import routeURL from 'constants/routing';

export default class Routing extends React.Component {
    render() {
        return (
            <>
                <Route
                    exact
                    path={routeURL.registerPage.url}
                    component={routeURL.registerPage.component}
                />
                <Route
                    exact
                    path={routeURL.loginPage.url}
                    component={routeURL.loginPage.component}
                />
                <Route
                    exact
                    path={routeURL.searchPage.url}
                    component={routeURL.searchPage.component}
                />
                <Route
                    exact
                    path={routeURL.favouritesList.url}
                    component={routeURL.favouritesList.component}
                />
                <Route
                    exact
                    path={routeURL.beerDetailsPage.url}
                    component={routeURL.beerDetailsPage.component}
                />
            </>
        );
    }
}
