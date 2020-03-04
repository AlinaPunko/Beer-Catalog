import React from 'react';
import PropTypes from 'prop-types';

import OpenBrewPageButton from 'components/common/OpenBrewPageButton/openBrewPageButton';
import Icon from 'components/common/Icon/icon';

import minus from 'styles/icons/minus.svg';
import plus from 'styles/icons/plus.svg';

export default class BrewsListItem extends React.PureComponent {
    static propTypes = {
        brew: PropTypes.shape({
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired
        }).isRequired
    }

    decreaseRating = () => {

    }

    increaseRating = () => {

    }

    render() {
        const { brew } = this.props;
        return (
            <div className="brews-list-item">
                <div>
                    <div className="brews-list-item__title">{brew.name}</div>
                    <div className="brews-list-item__date">{brew.date}</div>
                    <div className="brews-list-item__location">{brew.location}</div>
                    <OpenBrewPageButton brewId={beer.id} className="brews-list-item__open-brew-page-button" />
                    <button type="button" className="brews-list-item__rating-button" onClick={decreaseRating}>
                        <Icon icon={minus} iconClassName="brews-list-item__rating-button-icon" />
                    </button>
                    <button type="button" className="brews-list-item__rating-button" onClick={increaseRating}>
                        <Icon icon={plus} iconClassName="brews-list-item__rating-button-icon" />
                    </button>
                </div>
                <img alt="Item_image" className="favourite-list-item__image" src={beer.imageUrl} />

            </div>
        );
    }
}
