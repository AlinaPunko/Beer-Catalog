import React from 'react';
import PropTypes from 'prop-types';

import OpenDetailsPageButton from 'components/common/OpenDetailsPageButton/OpenDetailsPageButton';

import './favouriteListItem.scss';

export default class FavouriteListItem extends React.Component {
static propTypes = {
    beer: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

    onDelete =() => {
        const { onDelete } = this.props;
        onDelete(this.props.beer);
    }

    render() {
        const { beer } = this.props;

        return (
            <div className="favourite-list-item">
                <div>
                    <div className="favourite-list-item__title">{beer.name}</div>
                    <div className="favourite-list-item__tagline">{beer.tagline}</div>
                    <div className="favourite-list-item__description">{beer.description}</div>
                    <OpenDetailsPageButton beerID={beer.id} parentElement="FavouriteListItem" />
                    <button type="button" className="favourite-list-item__button" onClick={this.onDelete}>Remove favourite</button>
                </div>
                <img alt="Item_image" className="favourite-list-item__image" src={beer.imageUrl} />

            </div>
        );
    }
}
