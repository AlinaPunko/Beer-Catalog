import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import SearchSection from 'components/SearchSection/SearchSection';
import BeersList from 'components/BeersList/BeersList';


import 'styles/reset.scss';
import 'styles/common.scss';

import services from 'services/services';


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => {
            this.handleScroll(e);
        });
    }

    async loadBeers() {
        const { page, Beers } = this.state;
        const result = await services.getBeersByPage(page);
        this.setState({
            Beers: [...Beers, ...result],
        });
    }

    handleScroll() {
        const lastBeer = document.querySelector('.beers-list > div:last-child');
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
            <div>
                <SearchSection />
                <BeersList Beers={this.state.Beers} />
            </div>
        );
    }
}
