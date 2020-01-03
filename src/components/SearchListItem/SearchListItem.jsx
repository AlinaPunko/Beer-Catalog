import React from 'react';
import PropTypes from 'prop-types';

import './searchListItem.scss';

import localStorageHelper from 'helpers/localStorageHelper';

export default class SearchListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFavourite: props.isFavourite };
    }

    onClickHandler(item) {
        this.state.isFavourite
            ? localStorageHelper.deleteItemFromLocalStorage(item)
            : localStorageHelper.addItemToLocalStorage(item);
        this.setState({ isFavourite: !this.state.isFavourite });
    }

    render() {
        const { item } = this.props;
        return (
            <div className="searchListItem">
                <img alt="Beer" src={item.image_url} className="searchListItem__image" />
                <div className="searchListItem__information">
                    <div className="searchListItem__title">{item.name}</div>
                    <a className="searchListItem__tagline">{item.tagline}</a>
                    <button type="button" className="searchListItem__button">Open</button>
                    <button
                        type="button"
                        className="searchListItem__button"
                        onClick={() => { this.onClickHandler(item); }}
                    >
                        {this.state.isFavourite ? 'Remove favourite' : 'Favourite'}
                    </button>
                </div>
            </div>
        );
    }
}

SearchListItem.propTypes = {
    item: PropTypes.object.isRequired,
    isFavourite: PropTypes.bool.isRequired,
};
