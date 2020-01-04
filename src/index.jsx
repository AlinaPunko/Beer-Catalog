import 'regenerator-runtime/runtime';
import React from 'react';
import Reactdom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';


import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchSection from 'components/SearchSection/SearchSection';
import SearchList from 'components/SearchList/SearchList';
import FavouriteList from 'components/FavouriteList/FavouriteList';


import 'styles/reset.scss';
import 'styles/common.scss';

import services from 'services/services';
import localStorageHelper from 'helpers/localStorageHelper';
// import rootReducer from './reducers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            FavouriteBeers: localStorageHelper.getItemsFromLocalStorage(),
            Beers: [],
            page: 1
        };
    }

    componentWillMount() {
        this.loadBeers();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        });
    }

    getSearchList = () => {
        return <SearchList Beers={this.state.Beers} />;
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

    async loadBeers() {
        const { page, Beers } = this.state;
        const result = await services.getBeersByPage(page);
        this.setState({
            Beers: [...Beers, ...result],
        });
    }

    handleScroll() {
        const lastBeer = document.querySelector('.search-list > div:last-child');
        const lastBeerOffset = lastBeer.offsetTop + lastBeer.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        if (pageOffset > lastBeerOffset) {
            this.loadMore();
        }
    }

    loadMore() {
        this.setState(
            (prevState) => ({
                page: prevState.page + 1,
            }),
            this.loadBeers,
        );
    }


    loadUsers() {
        this.setState({
            Beers: [...this.state.Beers, ...services.getBeersByPage(++this.state.currentPage)],
            currentPage: ++this.state.currentPage
        });
    }

    render() {
        return (
            <Router>
                <div className="App" onClick={this.closeMenu()}>
                    <Header toggleFunction={this.toggleMenu()} />
                    <SideMenu Beers={this.state.FavouriteBeers} showMenu={this.state.showMenu} />
                    <SearchSection />
                    {this.state.Beers
                    && (
                        <>
                            <Route
                                exact
                                path="/"
                                component={this.getSearchList}
                            />
                            <Route
                                exact
                                path="/favourites"
                                component={FavouriteList}
                            />
                        </>
                    )}
                </div>

            </Router>
        );
    }
}


Reactdom.render(
    <App />,
    document.getElementById('app'),
);
