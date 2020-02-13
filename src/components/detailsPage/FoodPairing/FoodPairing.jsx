import React from 'react';
import PropTypes from 'prop-types';

import './foodPairing.scss';

export default class FoodPairing extends React.PureComponent {
    static propTypes={
        foodPairingList: PropTypes.array.isRequired
    }


    render() {
        const { foodPairingList } = this.props;

        const renderedFoodPairings = foodPairingList.map((foodPairing, index) => {
            return (
                <li key={index} className="food-pairing-block__list-item">
                    {foodPairing}
                </li>
            );
        });

        return (
            <div className="food-pairing-block">
                <h2 className="food-pairing-block__title">Food Pairing</h2>
                <ul className="food-pairing-block__list">
                    {renderedFoodPairings}
                </ul>
            </div>
        );
    }
}
