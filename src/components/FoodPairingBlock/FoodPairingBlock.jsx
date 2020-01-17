import React from 'react';
import PropTypes from 'prop-types';

import './foodPairingBlock.scss';

export default class FoodPairingBlock extends React.PureComponent {
    static propTypes={
        foodPairingList: PropTypes.array.isRequired
    }

    renderListItems=(foodPairings) => {
        let i = 0;
        return foodPairings.map((foodPairing) => {
            return (
                <li key={i++} className="food-pairing-block__list-item">
                    {foodPairing}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="food-pairing-block">
                <h1 className="food-pairing-block__title">Food Pairing</h1>
                <ul className="food-pairing-block__list">
                    {this.renderListItems(this.props.foodPairingList)}
                </ul>
            </div>
        );
    }
}
