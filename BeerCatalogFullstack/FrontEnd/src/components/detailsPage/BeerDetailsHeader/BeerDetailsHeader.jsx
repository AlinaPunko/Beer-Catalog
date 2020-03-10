import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import FavoriteButton from 'components/common/FavoriteButton/favoriteButton';
import favoritesService from 'services/favoritesService';
import favoriteItemHelper from 'helpers/favoriteItemHelper';

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

    static contextType = UserContext;

    constructor(props, context) {
        super(props, context);
        this.state = { isFavorite: favoriteItemHelper.isFavorite(this.props.beer, this.context.favoriteBeers) };
    }

    toggleFavoriteButton = () => {
        const { beer } = this.props;

        this.state.isFavorite
            ? favoritesService.deleteItem(beer)
            : favoritesService.add(beer);
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {
        const { beer } = this.props;

        return (
            <section className="beer-details-header">
                <div className="beer-details-header__content">
                    <h1 className="beer-details-header__title">{beer.name}</h1>
                    <div className="beer-details-header__tagline">{beer.tagline}</div>
                    <FavoriteButton beer={beer} className="beer-details-header__button" />
                    <p className="beer-details-header__description">{beer.description}</p>
                </div>
                <img alt="Item_image" className="beer-details-header__image" src={beer.imageUrl} />
            </section>
        );
    }
}
