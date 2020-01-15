import React from 'react';
import PropTypes from 'prop-types';

import BeerProperty from 'components/BeerProperty/BeerProperty';

import './beerPropertiesList.scss';

export default class BeerPropertiesList extends React.PureComponent {
    static propTypes={
        beerColor: PropTypes.number.isRequired,
        beerBitterness: PropTypes.number.isRequired,
        beerAlcohol: PropTypes.number.isRequired
    }

    render() {
        const { beerColor, beerBitterness, beerAlcohol } = this.props;
        return (
            <ul className="beer-properties-list">
                <BeerProperty propertyAcronym="ABV" propertyName="Alcohol by volume" propertyValue={beerColor} />
                <BeerProperty propertyAcronym="IBU" propertyName="International bitterness units" propertyValue={beerBitterness} />
                <BeerProperty propertyAcronym="EBC" propertyName="Color by EBC" propertyValue={beerAlcohol} />
            </ul>
        );
    }
}
