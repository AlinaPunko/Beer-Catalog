import React from 'react';
import PropTypes from 'prop-types';

import './foodPairingListItem.scss';

export default class FoodPairingList extends React.PureComponent {
    static propTypes={
        foodPairing: PropTypes.string.isRequired
    }

    render() {
        return (
            <li className="food-pairing-list-item">
                {this.props.foodPairing}
            </li>
        );
    }
}
