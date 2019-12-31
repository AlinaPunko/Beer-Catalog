import React from 'react';

import './favouriteListItem.scss';

export default class FavouriteListItem extends React.Component {
  render() {
    return (
        <div className="favouriteListItem">
            <div>
                <div classNamee="favouriteListItem__title">{this.props.item.title}</div>
                <a href="#" className="favouriteListItem__tagline">{this.props.item.tagline}</a>
                <div className="favouriteListItem__description">{this.props.item.description}</div>
                <button type="button" className="favouriteListItem__button">Open</button>
                <button type="button" className="favouriteListItem__button">Remove favourite</button>
            </div>
            <img alt="Item_image" className="favouriteListItem__image" src={this.props.item.image} />
        </div>
    );
  }
}
