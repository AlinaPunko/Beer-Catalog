import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchPage from 'components/SearchPage/SearchPage';
import FavouritesPage from 'components/FavouritesPage/FavouritesPage';


import 'styles/reset.scss';
import 'styles/common.scss';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    closeMenu = () => {
        if (this.state.showMenu) {
            this.setState({ showMenu: !this.state.showMenu });
        }
    }

    render() {
        return (
            <Router>
                <div className="App" onClick={this.closeMenu}>
                    <Header toggleFunction={this.toggleMenu} />
                    <SideMenu showMenu={this.state.showMenu} />
                    <Route
                        exact
                        path="/"
                        component={SearchPage}
                    />
                    <Route
                        exact
                        path="/favourites"
                        component={FavouritesPage}
                    />
                </div>
            </Router>
        );
    }
}
