import React from 'react';
import { connect } from 'react-redux';

import localStorageHelper from 'helpers/localStorageHelper';

import BeersListItem from 'components/BeersListItem/BeersListItem';

import './beersList.scss';

import services from 'services/services';

class BeersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { page } = this.state;
        const result = await services.getBeersByPage(page);
        this.props.addBeers(result);
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

    isFavourite(beer) {
        if (localStorageHelper.getItemsFromLocalStorage().find(
            (element) => { return element.id === beer.id; },
        )
        ) return true;
        return false;
    }

    render() {
        return (
            <div className="beers-list">
                {
                    this.props.beers.map(
                        (beer) => {
                            const isFavourite = this.isFavourite(beer);
                            return (
                                <BeersListItem
                                    item={beer}
                                    isFavourite={isFavourite}
                                />
                            );
                        },
                    )
                }
            </div>
        );
    }
}

export default connect()(BeersList);
