import React from 'react';
import PropTypes from 'prop-types';

import './favouriteListItem.scss';

export default class FavouriteListItem extends React.PureComponent {
static propTypes = {
    item: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

    onDelete =() => {
        const { onDelete, item } = this.props;
        onDelete(item);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="favourite-list-item">
                <div>
                    <div className="favourite-list-item__title">{item.name}</div>
                    <a href="#" className="favourite-list-item__tagline">{item.tagline}</a>
                    <div className="favourite-list-item__description">{item.description}</div>
                    <button type="button" className="favourite-list-item__button">Open</button>
                    <button type="button" className="favourite-list-item__button" onClick={this.onDelete}>Remove favourite</button>
                </div>
                <img alt="Item_image" className="favourite-list-item__image" src={item.image_url} />

            </div>
        );
    }
}
