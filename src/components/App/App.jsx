import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchPage from 'components/SearchPage/SearchPage';
import FavouritesList from 'components/FavouritesList/FavouritesList';
import BeerDetailsPage from 'components/BeerDetailsPage/BeerDetailsPage';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    openMenu = () => {
        this.setState({ showMenu: true });
    }

    closeMenu = () => {
        this.setState({ showMenu: false });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header openFunction={this.openMenu} />
                    <SideMenu showMenu={this.state.showMenu} closeFunction={this.closeMenu} />
                    <Route
                        exact
                        path="/"
                        component={SearchPage}
                    />
                    <Route
                        exact
                        path="/favourites"
                        component={FavouritesList}
                    />
                    <Route
                        exact
                        path="/details/:id"
                        component={BeerDetailsPage}
                    />
                </div>
            </Router>
        );
    }
}
