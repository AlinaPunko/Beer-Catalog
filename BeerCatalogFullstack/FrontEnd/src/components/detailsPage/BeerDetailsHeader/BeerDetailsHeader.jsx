import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import FavouriteButton from 'components/common/FavouriteButton/favouriteButton';
import favouritesService from 'services/favouritesService';
import favouriteItemHelper from 'helpers/favouriteItemHelper';

import './beerDetailsHeader.scss';

export default class BeerDetailsHeader extends React.Component {
    static propTypes = {
        beer: PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isFavourite: favouriteItemHelper.isFavourite(this.props.beer, this.context.favouriteBeers) };
    }

    onFavouriteButtonClick = () => {
        const { beer } = this.props;

        this.state.isFavourite
            ? favouritesService.deleteItem(beer)
            : favouritesService.add(beer);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const { beer } = this.props;

        return (
            <section className="beer-details-header">
                <div className="beer-details-header__content">
                    <h1 className="beer-details-header__title">{beer.name}</h1>
                    <div className="beer-details-header__tagline">{beer.tagline}</div>
                    <FavouriteButton beer={beer} className="beer-details-header__button" />
                    <p className="beer-details-header__description">{beer.description}</p>
                </div>
                <img alt="Item_image" className="beer-details-header__image" src={beer.imageUrl} />
            </section>
        );
    }
}

BeerDetailsHeader.contextType = UserContext;
