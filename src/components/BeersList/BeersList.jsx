import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import localStorageHelper from 'helpers/localStorageHelper';
import services from 'services/services';

import BeersListItem from 'components/BeersListItem/BeersListItem';

import preloader from 'styles/icons/preloader.svg';

import Icon from 'components/Icon/Icon';

import './beersList.scss';

class BeersList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isLoading: true
        };
    }

    componentDidMount() {
        this.loadBeers();
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
    }

    async loadBeers() {
        const { page } = this.state;
        const result = await services.getBeersByPage(page);
        this.props.addBeers(result);
        this.setState({ isLoading: false });
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
        this.setState({ isLoading: true });
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
            <>
                <div className="beers-list">
                    {
                        this.props.beers.map(
                            (beer) => {
                                const isFavourite = this.isFavourite(beer);
                                return (
                                    <BeersListItem
                                        item={beer}
                                        key={beer.id}
                                        isFavourite={isFavourite}
                                    />
                                );
                            },
                        )
                    }
                </div>
                {this.state.isLoading && (
                    <div className="beers-list__preloader">
                        <Icon className="beers-list__preloader-icon" id={preloader.id} viewBox={preloader.viewBox} />
                    </div>
                )}
            </>
        );
    }
}

export default connect()(BeersList);

BeersList.propTypes = {
    beers: PropTypes.array.isRequired,
    addBeers: PropTypes.func.isRequired
};
