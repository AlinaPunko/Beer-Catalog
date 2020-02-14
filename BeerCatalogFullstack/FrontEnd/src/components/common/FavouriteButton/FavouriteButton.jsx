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
        className: PropTypes.string.isRequired
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
        const buttonClass = classnames('favourite-button', this.props.className);
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
