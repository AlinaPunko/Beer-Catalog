import React from 'react';
import PropTypes from 'prop-types';

import './brewingIngredients.scss';

export default class BrewingIngredients extends React.PureComponent {
    static propTypes = {
        ingredients: PropTypes.shape({
            malt: PropTypes.array.isRequired,
            hops: PropTypes.array.isRequired,
            water: PropTypes.number,
            yeast: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const { ingredients } = this.props;

        const hopsValues = ingredients.hops.map((item, index) => {
            return (
                <li key={index}>
                    "{item.name}" - {item.amount.value} grams, add when {item.add}
                </li>
            );
        });

        const maltValues = ingredients.malt.map((item, index) => {
            return (
                <li key={index}>
                    "{item.name}" - {item.amount.value} kg
                </li>
            );
        });

        return (
            <div className="brewing-ingredients">
                <h2 className="brewing-ingredients__title">Ingredients</h2>
                <div className="brewing-ingredients__characteristics">
                    {ingredients.water
                    && (
                        <div className="brewing-ingredients__ingredient">
                            <h3 className="brewing-ingredients__subtitle">Water</h3>
                            <p>
                                {ingredients.water} liters
                            </p>
                        </div>
                    )}
                    <div className="brewing-ingredients__ingredient brewing-ingredients__value">
                        <h3 className="brewing-ingredients__subtitle">Malt</h3>
                        <ul>
                            {maltValues}
                        </ul>
                    </div>
                    <div className="brewing-ingredients__ingredient">
                        <h3 className="brewing-ingredients__subtitle">Hops</h3>
                        <ul>
                            {hopsValues}
                        </ul>
                    </div>
                    <div className="brewing-ingredients__ingredient">
                        <h3 className="brewing-ingredients__subtitle">Yeast</h3>
                        <p>
                            {ingredients.yeast}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
