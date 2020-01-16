import React from 'react';
import PropTypes from 'prop-types';

import './brewingIngredientsBlock.scss';

export default class BrewingIngredientsBlock extends React.PureComponent {
    getWaterValue = (waterInfo) => {
        return `${waterInfo.value} liters`;
    }

    getMaltValue = (maltInfo) => {
        return maltInfo.map((item) => {
            return (
                <p>
                    {' '}
"
                    {item.name}
" -
                    {' '}
                    {item.amount.value}
kg
                </p>
            );
        });
    }

    getHopsValue = (hopsInfo) => {

    }


    render() {
        const { ingredients } = this.props;
        debugger;
        return (
            <div className="brewing-ingredients-block">
                <h1 className="brewing-ingredients-block__title">Ingredients</h1>
                {ingredients.water
                && (
                    <>
                        <h3 className="brewing-ingredients-block__subtitle">Water</h3>
                        <div className="brewing-ingredients-block__water">
                            {}
                        </div>
                    </>
                )}
                <h3 className="brewing-ingredients-block__subtitle">Malt</h3>
                <div className="brewing-ingredients-block__malt">
                    {this.getMaltValue(ingredients.malt)}
                </div>
                <h3 className="brewing-ingredients-block__subtitle">Hops</h3>
                <div className="brewing-ingredients-block__hops">
                    {}
                </div>
                <h3 className="brewing-ingredients-block__subtitle">Yeast</h3>
                <div className="brewing-ingredients-block__yeast">
                    {ingredients.yeast}
                </div>
            </div>
        );
    }
}
