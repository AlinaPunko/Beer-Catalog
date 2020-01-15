import React from 'react';
import PropTypes from 'prop-types';

import BeerPropertiesList from 'components/BeerPropertiesList/BeerPropertiesList';
import FoodPairingList from 'components/FoodPairingList/FoodPairingList';
import BeerDetailsHeader from 'components/BeerDetailsHeader/BeerDetailsHeader';

import './beerDetailsPage.scss';

export default class BeerDetailsPage extends React.PureComponent {
    static propTypes={
        beer: PropTypes.object.isRequired
    }

    render() {
        debugger;
        return (
            <div className="beer-details-page">
                <BeerDetailsHeader item={this.props.beer} />
                <section className="beer-details-page__properties-food-pairing">
                    <div>
                        <h1 className="beer-details-page__properties-title">Properties</h1>
                        <BeerPropertiesList
                            beerColor={this.props.beer.color}
                            beerAlcohol={this.props.beer.alcohol}
                            beerBitterness={this.props.beer.internationalBitternessUnits}
                        />
                    </div>
                    <div>
                        <div className="beer-details-page__food-pairing-title">Food Pairing</div>
                        <FoodPairingList foodPairingList={this.props.beer.foodPairing} />
                    </div>
                </section>
            </div>
        );
    }
}
