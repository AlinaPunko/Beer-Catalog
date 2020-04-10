import React from 'react';
import PropTypes from 'prop-types';

import BrewingIngredients from 'components/common/BrewingIngredients/brewingIngredients';
import BrewingMethods from 'components/common/BrewingMethods/brewingMethods';

import './brewingSection.scss';

export default class BrewingSection extends React.PureComponent {
    static propTypes ={
        brewerTips: PropTypes.string.isRequired,
        ingredients: PropTypes.shape({
            malt: PropTypes.array.isRequired,
            hops: PropTypes.array.isRequired,
            yeast: PropTypes.string.isRequired
        }).isRequired,
        method: PropTypes.shape({
            mash_temp: PropTypes.array.isRequired,
            fermentation: PropTypes.object.isRequired
        }).isRequired
    }

    render() {
        const { brewerTips, ingredients, method } = this.props;

        return (
            <section className="brewing-section">
                <h2 className="brewing-section__title">Brewing</h2>
                <p className="brewing-section__brewing-tips">{brewerTips}</p>
                <div className="brewing-section__ingredients-method">
                    <BrewingIngredients ingredients={ingredients} />
                    <BrewingMethods method={method} />
                </div>
            </section>
        );
    }
}
