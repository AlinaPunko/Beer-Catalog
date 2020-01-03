import 'regenerator-runtime/runtime';
import React from 'react';
import Reactdom from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';


import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchSection from 'components/SearchSection/SearchSection';
import SearchList from 'components/SearchList/SearchList';
// import SearchListItem from 'components/SearchListItem/SearchListItem';


import 'styles/reset.scss';
import 'styles/common.scss';

import services from 'services/services';
import localStorageHelper from 'helpers/localStorageHelper';
// import rootReducer from './reducers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false };
    }

    async componentDidMount() {
        const result = await services.getBeersByPage(1);
        this.setState({
            FavouriteBeers: localStorageHelper.getItemsFromLocalStorage(),
            Beers: result,
        });
    }

    toggleMenu() {
        return () => { this.setState({ showMenu: !this.state.showMenu }); };
    }

    closeMenu() {
        return () => {
            if (this.state.showMenu) {
                this.setState({ showMenu: !this.state.showMenu });
            }
        };
    }

    render() {
        return (
            <div className="App" onClick={this.closeMenu()}>
                <Header toggleFunction={this.toggleMenu()} />
                <SideMenu showMenu={this.state.showMenu} />
                <SearchSection />
                {this.state.Beers
                && <SearchList Beers={this.state.Beers} />}
            </div>
        );
    }
}


Reactdom.render(
    <App />,
    document.getElementById('app'),
);
