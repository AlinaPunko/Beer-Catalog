import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { UserContext } from 'store/context/userContext';
import favoritesServices from 'services/favoritesService';
import favoriteItemHelper from 'helpers/favoriteItemHelper';

import './favoriteButton.scss';

export default class FavoriteButton extends React.PureComponent {
    static propTypes = {
        beer: PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired,
        className: PropTypes.string.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.state = { isFavorite: favoriteItemHelper.isFavorite(this.props.beer, this.context.favoriteBeers) };
    }

    toggleFavoriteState = () => {
        this.state.isFavorite
            ? favoritesServices.deleteItem(this.context.userId, this.props.beer)
            : favoritesServices.add(this.context.userId, this.props.beer);
        this.setState({ isFavorite: !this.state.isFavorite });
    }

    render() {
        const buttonClass = classnames('favorite-button', this.props.className);
        return (
            <UserContext.Consumer>
                {({ userId }) => (
                    userId !== ''
                        && (
                            <button
                                type="button"
                                className={buttonClass}
                                onClick={this.toggleFavoriteState}
                            >
                                {this.state.isFavorite ? 'Remove favorite' : 'Favorite'}
                            </button>
                        )
                )}
            </UserContext.Consumer>
        );
    }
}

FavoriteButton.contextType = UserContext;
