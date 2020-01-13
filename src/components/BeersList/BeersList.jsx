import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import services from 'services/services';
import BeersListItem from 'components/BeersListItem/BeersListItem';
import Icon from 'components/Icon/Icon';

import preloader from 'styles/icons/preloader.svg';

import './beersList.scss';

class BeersList extends React.PureComponent {
    static propTypes = {
        beers: PropTypes.array.isRequired,
        addBeers: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isLoading: true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.loadBeers(1);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    async loadBeers(page) {
        const result = await services.getPage(page);
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
        this.setState({ isLoading: true, page: this.state.page + 1 });
        this.loadBeers(this.state.page);
    }

    renderBeers() {
        return this.props.beers.map((beer) => {
            return (<BeersListItem item={beer} key={beer.id} />);
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
