import React from 'react';

import './searchListItem.scss';

export default class SearchListItem extends React.Component {
  render() {
    return (
        <div className="searchListItem">
            {/* <div className="searchListItem__image"> */}
            <img alt="Beer" src={this.props.item.image_url} className="searchListItem__image" />
            {/* </div> */}
            <div className="searchListItem__information">
                <div className="searchListItem__title">{this.props.item.name}</div>
                <a className="searchListItem__tagline">{this.props.item.tagline}</a>
                <button type="button" className="searchListItem__button">Open</button>
                <button type="button" className="searchListItem__button" onClick={this.props.favouriteAction}>Remove favourite</button>
            </div>
        </div>
    );
  }
}
