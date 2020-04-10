import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserContext } from 'store/context/userContext';
import Header from 'components/Header/header';
import SideMenu from 'components/SideMenu/sideMenu';
import AccountMenu from 'components/AccountMenu/accountMenu';
import Routing from 'components/Routing/routing';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showSideMenu: false,
            showAccountMenu: false
        };

        this.contextFeatures = {
            userId: null,
            favoriteBeers: [],
            setFavoriteBeers: (beers) => this.contextFeatures.favoriteBeers = beers,
            setUserId: (id) => this.contextFeatures.userId = id
        };
    }

    openSideMenu = () => {
        this.setState({ showSideMenu: true });
    }

    closeSideMenu = () => {
        this.setState({ showSideMenu: false });
    }

    toggleAccountMenu = () => {
        this.setState({ showAccountMenu: !this.state.showAccountMenu });
    }

    closeAccountMenu = () => {
        this.setState({ showAccountMenu: false });
    }

    render() {
        return (
            <UserContext.Provider value={this.contextFeatures}>
                <Router>
                    <div className="app">
                        <Header openSideMenu={this.openSideMenu} toggleAccountMenu={this.toggleAccountMenu} />
                        <SideMenu showMenu={this.state.showSideMenu} closeMenu={this.closeSideMenu} />
                        <AccountMenu showMenu={this.state.showAccountMenu} closeMenu={this.closeAccountMenu} />
                        <Routing />
                    </div>
                </Router>
            </UserContext.Provider>
        );
    }
}
