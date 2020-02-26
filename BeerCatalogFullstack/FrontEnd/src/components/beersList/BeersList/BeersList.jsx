import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UserContext } from 'store/context/userContext';
import favouritesService from 'services/favouritesService';
import beerService from 'services/beerService';
import BeersListItem from 'components/beersList/BeersListItem/beersListItem';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';

import './beersList.scss';

class BeersList extends React.PureComponent {
    static propTypes = {
        beers: PropTypes.array.isRequired,
        addBeers: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.beerPerPage = 12;
        this.state = {
            page: 1,
            isLoading: true,
            renderedBeers: this.beerPerPage
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.loadFavoriteBeers = this.loadFavoriteBeers.bind(this);
    }

    async componentDidMount() {
        await this.loadFavoriteBeers();
        this.loadBeers();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    async loadFavoriteBeers() {
        if (this.context.userId === '') {
            return;
        }

        const favoriteBeers = await favouritesService.getItems(this.context.userId);
        this.context.setFavouriteBeers(favoriteBeers);
    }

    async loadBeers() {
        const result = await beerService.getAll();
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
        this.setState({ isLoading: false });
    }

    loadMore() {
        const { page, renderedBeers } = this.state;
        this.setState({
            isLoading: true,
            page: page + 1,
            renderedBeers: renderedBeers + this.beerPerPage
        });
    }

    renderBeers() {
        const displayedBeers = this.props.beers.slice(0, this.state.renderedBeers);
        return displayedBeers.map((beer) => (<BeersListItem beer={beer} key={beer.id} />));
    }

    render() {
        return (
            <>
                <div className="beers-list">
                    {
                        this.renderBeers()
                    }
                </div>
                {this.state.isLoading && (
                    <div className="beers-list__preloader">
                        <Icon iconClassName="beers-list__preloader-icon" icon={preloader} />
                    </div>
                )}
            </>
        );
    }
}

BeersList.contextType = UserContext;
export default connect()(BeersList);
