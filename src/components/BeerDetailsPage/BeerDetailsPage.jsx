import React from 'react';
import PropTypes from 'prop-types';

import BeerPropertiesBlock from 'components/BeerPropertiesBlock/BeerPropertiesBlock';
import FoodPairingBlock from 'components/FoodPairingBlock/FoodPairingBlock';
import BeerDetailsHeader from 'components/BeerDetailsHeader/BeerDetailsHeader';
import BrewingSection from 'components/BrewingSection/BrewingSection';
import services from 'services/services';

import './beerDetailsPage.scss';

export default class BeerDetailsPage extends React.Component {
    static propTypes={
        match: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { beer: null };
        this.getBeer(this.props.match.params.id);
    }

    async getBeer(id) {
        const result = await services.getByID(id);
        await this.setState({ beer: result });
    }

    render() {
        const { beer } = this.state;
        if (!beer) {
            return null;
        }
        return (
            <div className="beer-details-page">
                <BeerDetailsHeader item={beer} />
                <section className="beer-details-page__properties-food-pairing">
                    <BeerPropertiesBlock
                        beerColor={beer.color}
                        beerAlcohol={beer.alcohol}
                        beerBitterness={beer.internationalBitternessUnits}
                    />
                    <FoodPairingBlock foodPairingList={beer.foodPairing} />
                </section>
                <BrewingSection brewerTips={beer.brewerTips} ingredients={beer.ingredients} method={beer.method} />
            </div>
        );
    }
}
