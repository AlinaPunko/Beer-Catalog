import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/openDetailsPageButton';
import FavoriteButton from 'components/common/FavoriteButton/favoriteButton';
import favoritesServices from 'services/favoritesService';
import favoriteItemHelper from 'helpers/favoriteItemHelper';

import './beersListItem.scss';

export default class BeersListItem extends React.PureComponent {
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

    toggleFavoriteState = () => {
        this.state.isFavorite
            ? favoritesServices.deleteItem(this.props.beer, this.context.userId)
            : favoritesServices.add(this.props.beer, this.context.userId);
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {
        const { beer } = this.props;

        return (
            <div className="beers-list-item">
                <img alt="Beer" src={beer.imageUrl} className="beers-list-item__image" />
                <div className="beers-list-item__information">
                    <div className="beers-list-item__title">{beer.name}</div>
                    <div className="beers-list-item__tagline">{beer.tagline}</div>
                    <OpenDetailsPageButton beerId={beer.id} className="beers-list-item__open-details-page-button" />
                    <FavoriteButton beer={beer} className="beers-list-item__favorite-button" />
                </div>
            </div>
        );
    }
}
