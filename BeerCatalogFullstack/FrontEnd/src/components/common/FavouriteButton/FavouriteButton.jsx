import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { UserContext } from 'store/context/userContext';
import favouritesServices from 'services/favouritesService';
import favouriteItemHelper from 'helpers/favouriteItemHelper';

import './favouriteButton.scss';

export default class FavouriteButton extends React.PureComponent {
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
        this.state = { isFavourite: favouriteItemHelper.isFavourite(this.props.beer, this.context.favouriteBeers) };
    }

    toggleFavouriteState = () => {
        this.state.isFavourite
            ? favouritesServices.deleteItem(this.context.userId, this.props.beer)
            : favouritesServices.add(this.context.userId, this.props.beer);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const buttonClass = classnames('favourite-button', this.props.className);
        return (
            <UserContext.Consumer>
                {({ userId }) => (
                    userId !== ''
                        && (
                            <button
                                type="button"
                                className={buttonClass}
                                onClick={this.toggleFavouriteState}
                            >
                                {this.state.isFavourite ? 'Remove favourite' : 'Favourite'}
                            </button>
                        )
                )}
            </UserContext.Consumer>
        );
    }
}

FavouriteButton.contextType = UserContext;
