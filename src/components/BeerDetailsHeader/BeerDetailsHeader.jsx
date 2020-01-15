import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import './beerDetailsHeader.scss';

export default class BeerDetailsHeader extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        debugger;
        this.state = { isFavourite: this.isFavourite(this.props.item) };
    }

    toggleFavouriteState = () => {
        const { item } = this.props;
        this.state.isFavourite
            ? localStorageHelper.deleteItem(item)
            : localStorageHelper.add(item);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    isFavourite(beer) {
        if (localStorageHelper.getItems().find(
            (element) => { return element.id === beer.id; },
        )
        ) return true;
        return false;
    }

    render() {
        const { item } = this.props;
        return (
            <section className="beer-details-header">
                <div>
                    <div className="beer-details-header__title">{item.name}</div>
                    <div className="beer-details-header__tagline">{item.tagline}</div>
                    <button type="button" className="beer-details-header__button" onClick={this.onFavouriteButtonClick}>Remove favourite</button>
                    <div className="beer-details-header__description">{item.description}</div>
                </div>
                <img alt="Item_image" className="beer-details-header__image" src={item.imageUrl} />
            </section>
        );
    }
}
