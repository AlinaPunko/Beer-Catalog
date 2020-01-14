import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import './beersListItem.scss';


export default class BeersListItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            image_url: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = { isFavourite: this.isFavourite(this.props.item) };
    }

    toggleFavouriteState = () => {
        this.state.isFavourite
            ? localStorageHelper.deleteItem(this.props.item)
            : localStorageHelper.add(this.props.item);
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
            <div className="beers-list-item">
                <img alt="Beer" src={item.image_url} className="beers-list-item__image" />
                <div className="beers-list-item__information">
                    <div className="beers-list-item__title">{item.name}</div>
                    <div className="beers-list-item__tagline">{item.tagline}</div>
                    <button type="button" className="beers-list-item__button">Open</button>
                    <button
                        type="button"
                        className="beers-list-item__button"
                        onClick={this.toggleFavouriteState}
                    >
                        {this.state.isFavourite ? 'Remove favourite' : 'Favourite'}
                    </button>
                </div>
            </div>
        );
    }
}
