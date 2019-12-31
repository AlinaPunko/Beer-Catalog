import React from 'react';

import './searchListItem.scss';

import localStorageHelper from 'helpers/localStorageHelper';

export default class SearchListItem extends React.Component {
  render() {
    return (
        <div className="searchListItem">
            <img alt="Beer" src={this.props.item.image_url} className="searchListItem__image" />
            <div className="searchListItem__information">
                <div className="searchListItem__title">{this.props.item.name}</div>
                <a className="searchListItem__tagline">{this.props.item.tagline}</a>
                <button type="button" className="searchListItem__button">Open</button>
                <button
                    type="button"
                    className="searchListItem__button"
                    onClick={() => { this.props.isFavourite ? localStorageHelper.deleteItemFromLocalStorage(this.props.item) : localStorageHelper.addItemToLocalStorage(this.props.item); }}
                >
                    {this.props.isFavourite ? 'Delete from favourites' : 'Favourite'}
                </button>
            </div>
        </div>
    );
  }
}
