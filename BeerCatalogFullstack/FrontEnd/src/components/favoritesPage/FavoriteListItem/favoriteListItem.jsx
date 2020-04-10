import React from 'react';
import PropTypes from 'prop-types';

import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/openDetailsPageButton';

import './favoriteListItem.scss';

export default class FavoriteListItem extends React.PureComponent {
    static propTypes = {
        beer: PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired,
        deleteItem: PropTypes.func.isRequired
    };

    deleteItem = () => {
        const { deleteItem } = this.props;
        deleteItem(this.props.beer);
    }

    render() {
        const { beer } = this.props;
        return (
            <div className="favorite-list-item">
                <div>
                    <div className="favorite-list-item__title">{beer.name}</div>
                    <div className="favorite-list-item__tagline">{beer.tagline}</div>
                    <div className="favorite-list-item__description">{beer.description}</div>
                    <OpenDetailsPageButton beerId={beer.id} className="favorite-list-item__open-details-page-button" />
                    <button type="button" className="favorite-list-item__remove-favorite-button" onClick={this.deleteItem}>Remove favorite</button>
                </div>
                <img alt="Item_image" className="favorite-list-item__image" src={beer.imageUrl} />

            </div>
        );
    }
}
