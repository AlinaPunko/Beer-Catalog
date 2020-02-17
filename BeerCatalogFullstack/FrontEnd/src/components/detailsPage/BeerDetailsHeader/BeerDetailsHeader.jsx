import React from 'react';
import PropTypes from 'prop-types';

import FavouriteButton from 'components/common/FavouriteButton/FavouriteButton';
import localStorageHelper from 'helpers/localStorageHelper';
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

    constructor(props) {
        super(props);
        this.state = { isFavourite: favouriteItemHelper.isFavourite(this.props.beer) };
    }

    onFavouriteButtonClick = () => {
        const { beer } = this.props;

        this.state.isFavourite
            ? localStorageHelper.deleteItem(beer)
            : localStorageHelper.add(beer);
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
