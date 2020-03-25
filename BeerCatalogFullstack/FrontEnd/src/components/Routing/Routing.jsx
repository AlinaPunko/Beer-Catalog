import React from 'react';
import { Route } from 'react-router-dom';

import routeURL from 'constants/routing';

export default class Routing extends React.Component {
    render() {
        return (
            <>
                <Route
                    exact
                    path={routeURL.signUpPage.url}
                    component={routeURL.signUpPage.component}
                />
                <Route
                    exact
                    path={routeURL.signInPage.url}
                    component={routeURL.signInPage.component}
                />
                <Route
                    exact
                    path={routeURL.searchPage.url}
                    component={routeURL.searchPage.component}
                />
                <Route
                    exact
                    path={routeURL.favoritesList.url}
                    component={routeURL.favoritesList.component}
                />
                <Route
                    exact
                    path={routeURL.beerDetailsPage.url}
                    component={routeURL.beerDetailsPage.component}
                />
                <Route
                    exact
                    path={routeURL.brewingInfoPage.url}
                    component={routeURL.brewingInfoPage.component}
                />
                <Route
                    exact
                    path={routeURL.brewsList.url}
                    component={routeURL.brewsList.component}
                />
                <Route
                    exact
                    path={routeURL.profilePage.url}
                    component={routeURL.profilePage.component}
                />
            </>
        );
    }
}
