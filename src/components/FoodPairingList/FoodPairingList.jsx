import React from 'react';
import PropTypes from 'prop-types';

import FoodPairingListItem from 'components/FoodPairingListItem/FoodPairingListItem';

import './foodPairingList.scss';

export default class FoodPairingList extends React.PureComponent {
    static propTypes={
        foodPairingList: PropTypes.array.isRequired
    }

    renderListItems=(foodPairings) => {
        return foodPairings.map((foodPairing) => { return <FoodPairingListItem foodPairing={foodPairing} />; });
    }

    render() {
        return (
            <ul className="food-pairing-list">
                {this.renderListItems(this.props.foodPairingList)}
            </ul>
        );
    }
}
