import React from 'react';

import './searchListItem.scss';

export default class SearchListItem {
  render() {
    <div className="searchListItem">
      <div className="searchListItem__image">
        <img src={this.props.item.image} />
      </div>
      <div className="searchListItem__information">
        <div className="searchListItem__title">{this.props.item.title}</div>
        <a className="searchListItem__tagline">Tagline</a>
        <button className="searchListItem__button">Open</button>
        <button className="searchListItem__button">Remove favourite</button>
      </div>
    </div>;
  }
}
