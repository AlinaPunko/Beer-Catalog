import React from 'react';
import PropTypes from 'prop-types';

import './brewingIngredientsBlock.scss';

export default class BrewingIngredientsBlock extends React.PureComponent {
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
            <div className="brewing-ingredients-block">
                <h2 className="brewing-ingredients-block__title">Ingredients</h2>
                <div className="brewing-ingredients-block__characteristics">
                    {ingredients.water
                    && (
                        <div className="brewing-ingredients-block__ingredient">
                            <h3 className="brewing-ingredients-block__subtitle">Water</h3>
                            <p>
                                {ingredients.water}
                                liters
                            </p>
                        </div>
                    )}
                    <div className="brewing-ingredients-block__ingredient brewing-ingredients-block__value">
                        <h3 className="brewing-ingredients-block__subtitle">Malt</h3>
                        <ul>
                            {maltValues}
                        </ul>
                    </div>
                    <div className="brewing-ingredients-block__ingredient">
                        <h3 className="brewing-ingredients-block__subtitle">Hops</h3>
                        <ul>
                            {hopsValues}
                        </ul>
                    </div>
                    <div className="brewing-ingredients-block__ingredient">
                        <h3 className="brewing-ingredients-block__subtitle">Yeast</h3>
                        <p>
                            {ingredients.yeast}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
