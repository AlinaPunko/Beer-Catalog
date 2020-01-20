import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import localStorageHelper from 'helpers/localStorageHelper';
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
        parentElement: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { isFavourite: favouriteItemHelper.isFavourite(this.props.beer) };
    }

    toggleFavouriteState = () => {
        this.state.isFavourite
            ? localStorageHelper.deleteItem(this.props.beer)
            : localStorageHelper.add(this.props.beer);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const { parentElement } = this.props;
        const buttonClass = classnames('favourite-button', {
            'favourite-button--on-beers-list': parentElement === 'BeersListItem',
            'favourite-button--on-beer-details-header': parentElement === 'BeerDetailsHeader'
        });
        return (
            <button
                type="button"
                className={buttonClass}
                onClick={this.toggleFavouriteState}
            >
                {this.state.isFavourite ? 'Remove favourite' : 'Favourite'}
            </button>
        );
    }
}
