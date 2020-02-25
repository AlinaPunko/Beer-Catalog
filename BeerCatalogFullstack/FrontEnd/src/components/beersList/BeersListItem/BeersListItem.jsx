import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/UserContext';
import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/OpenDetailsPageButton';
import FavouriteButton from 'components/common/FavouriteButton/FavouriteButton';
import favouritesServices from 'services/favouritesService';
import favouriteItemHelper from 'helpers/favouriteItemHelper';

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

    constructor(props, context) {
        super(props, context);
        this.state = { isFavourite: favouriteItemHelper.isFavourite(this.props.beer, this.context.favouriteBeers) };
    }

    toggleFavouriteState = () => {
        this.state.isFavourite
            ? favouritesServices.deleteItem(this.props.beer, this.context.userId)
            : favouritesServices.add(this.props.beer, this.context.userId);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const { beer } = this.props;
        debugger;
        return (
            <div className="beers-list-item">
                <img alt="Beer" src={beer.imageUrl} className="beers-list-item__image" />
                <div className="beers-list-item__information">
                    <div className="beers-list-item__title">{beer.name}</div>
                    <div className="beers-list-item__tagline">{beer.tagline}</div>
                    <OpenDetailsPageButton beerId={beer.id} className="beers-list-item__open-details-page-button" />
                    <FavouriteButton beer={beer} className="beers-list-item__favourite-button" />
                </div>
            </div>
        );
    }
}
BeersListItem.contextType = UserContext;
