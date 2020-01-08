import React from 'react';
import PropTypes from 'prop-types';

import './beersListItem.scss';

import localStorageHelper from 'helpers/localStorageHelper';

export default class BeersListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFavourite: props.isFavourite };
    }

    onClickHandler = () => {
        this.state.isFavourite
            ? localStorageHelper.deleteItemFromLocalStorage(this.props.item)
            : localStorageHelper.addItemToLocalStorage(this.props.item);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const { item } = this.props;
        return (
            <div className="beers-list-item">
                <img alt="Beer" src={item.image_url} className="beers-list-item__image" />
                <div className="beers-list-item__information">
                    <div className="beers-list-item__title">{item.name}</div>
                    <a className="beers-list-item__tagline">{item.tagline}</a>
                    <button type="button" className="beers-list-item__button">Open</button>
                    <button
                        type="button"
                        className="beers-list-item__button"
                        onClick={this.onClickHandler}
                    >
                        {this.state.isFavourite ? 'Remove favourite' : 'Favourite'}
                    </button>
                </div>
            </div>
        );
    }
}

BeersListItem.propTypes = {
    item: PropTypes.object.isRequired,
    isFavourite: PropTypes.bool.isRequired,
};
