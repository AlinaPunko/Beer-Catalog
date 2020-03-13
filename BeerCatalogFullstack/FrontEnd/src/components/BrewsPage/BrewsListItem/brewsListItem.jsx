import React from 'react';
import PropTypes from 'prop-types';

import OpenBrewingInfoPageButton from 'components/common/OpenBrewingInfoPageButton/openBrewingInfoPageButton';

import './brewsListItem.scss';

export default class BrewsListItem extends React.PureComponent {
    static propTypes = {
        brew: PropTypes.shape({
            id: PropTypes.number.isRequired,
            beerId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            dateTime: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            photos: PropTypes.array.isRequired
        }).isRequired
    }

    render() {
        const { brew } = this.props;

        return (
            <li className="brews-list-item">
                <div>
                    <p className="brews-list-item__row">Brew name: {brew.name}</p>
                    <p className="brews-list-item__row">Date: {brew.dateTime}</p>
                    <p className="brews-list-item__row">Location: {brew.location}</p>
                    <p className="brews-list-item__row">Rating: {brew.rating}</p>
                    <OpenBrewingInfoPageButton
                        brewId={brew.id}
                        text="Open full info"
                        beerId={brew.beerId}
                        className="brews-list-item__open-brew-page-button"
                    />
                </div>
                <img alt="Item_image" className="brews-list-item__image" src={brew.photos[0]} />

            </li>
        );
    }
}
