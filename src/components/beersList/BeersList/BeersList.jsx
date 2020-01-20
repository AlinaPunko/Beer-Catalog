import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import beerService from 'services/beerService';
import BeersListItem from 'components/beersList/BeersListItem/BeersListItem';
import Icon from 'components/common/Icon/Icon';

import preloader from 'styles/icons/preloader.svg';

import './beersList.scss';

class BeersList extends React.PureComponent {
    static propTypes = {
        beers: PropTypes.array.isRequired,
        addBeers: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.beerPerPage = 12;
        this.state = {
            page: 1,
            isLoading: true,
            renderedBeers: this.beerPerPage
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.loadBeers();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
        this.setState({ isLoading: true, page: this.state.page + 1, renderedBeers: this.state.renderedBeers + this.beerPerPage });
    }

    renderBeers() {
        const displayedBeers = this.props.beers.slice(0, this.state.renderedBeers);
        return displayedBeers.map((beer) => {
            return (<BeersListItem beer={beer} key={beer.id} />);
        });
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

export default connect()(BeersList);
