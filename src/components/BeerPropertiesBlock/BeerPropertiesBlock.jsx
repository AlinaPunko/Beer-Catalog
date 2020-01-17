import React from 'react';
import PropTypes from 'prop-types';

import BeerPropertyItem from 'components/BeerPropertyItem/BeerPropertyItem';

import './beerPropertiesBlock.scss';

export default class BeerPropertiesBlock extends React.PureComponent {
    static propTypes={
        beerColor: PropTypes.number.isRequired,
        beerBitterness: PropTypes.number.isRequired,
        beerAlcohol: PropTypes.number.isRequired
    }

    render() {
        const { beerColor, beerBitterness, beerAlcohol } = this.props;
        return (
            <div className="beer-properties-block">
                <h1 className="beer-properties-block__title">Properties</h1>
                <ul className="beer-properties-block__list">
                    <BeerPropertyItem propertyAcronym="ABV" propertyName="Alcohol by volume" propertyValue={beerColor} />
                    <BeerPropertyItem propertyAcronym="IBU" propertyName="International bitterness units" propertyValue={beerBitterness} />
                    <BeerPropertyItem propertyAcronym="EBC" propertyName="Color by EBC" propertyValue={beerAlcohol} />
                </ul>
            </div>

        );
    }
}
