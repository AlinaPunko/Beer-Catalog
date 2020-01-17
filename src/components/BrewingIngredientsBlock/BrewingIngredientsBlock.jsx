import React from 'react';
import PropTypes from 'prop-types';

import './brewingIngredientsBlock.scss';

export default class BrewingIngredientsBlock extends React.PureComponent {
    static propTypes = {
        ingredients: PropTypes.shape({
            malt: PropTypes.array,
            hops: PropTypes.array,
            water: PropTypes.number,
            yeast: PropTypes.string
        }).isRequired
    }

    getWaterValue = (waterInfo) => {
        return `${waterInfo.value} liters`;
    }

    getMaltValue = (maltInfo) => {
        let i = 0;
        return maltInfo.map((item) => {
            return (
                <li key={i++}>
                    {' '}
                    &quot;
                    {item.name}
                    &quot; -
                    {' '}
                    {item.amount.value}
                    {' '}
                    kg
                </li>
            );
        });
    }

    getHopsValue = (hopsInfo) => {
        let i = 0;
        return hopsInfo.map((item) => {
            return (
                <li key={i++}>
                    &quot;
                    {item.name}
                    &quot; -
                    {' '}
                    {item.amount.value}
                    {' '}
                    grams
                    {', '}
                    add when
                    {' '}
                    {item.add}
                </li>
            );
        });
    }


    render() {
        const { ingredients } = this.props;
        return (
            <div className="brewing-ingredients-block">
                <h1 className="brewing-ingredients-block__title">Ingredients</h1>
                <div className="brewing-ingredients-block__characteristics">
                    {ingredients.water
                    && (
                        <div className="brewing-ingredients-block__ingredient">
                            <h3 className="brewing-ingredients-block__subtitle">Water</h3>
                            <p className="brewing-ingredients-block__water-value">
                                {ingredients.water}
                                liters
                            </p>
                        </div>
                    )}
                    <div className="brewing-ingredients-block__ingredient">
                        <h3 className="brewing-ingredients-block__subtitle">Malt</h3>
                        <ul className="brewing-ingredients-block__malt-list">
                            {this.getMaltValue(ingredients.malt)}
                        </ul>
                    </div>
                    <div className="brewing-ingredients-block__ingredient">
                        <h3 className="brewing-ingredients-block__subtitle">Hops</h3>
                        <ul className="brewing-ingredients-block__hops-list">
                            {this.getHopsValue(ingredients.hops)}
                        </ul>
                    </div>
                    <div className="brewing-ingredients-block__ingredient">
                        <h3 className="brewing-ingredients-block__subtitle">Yeast</h3>
                        <p className="brewing-ingredients-block__yeast-value">
                            {ingredients.yeast}
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}
