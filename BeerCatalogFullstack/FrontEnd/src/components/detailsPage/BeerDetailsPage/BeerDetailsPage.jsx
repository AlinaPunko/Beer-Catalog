import React from 'react';
import PropTypes from 'prop-types';

import BeerProperties from 'components/detailsPage/BeerProperties/beerProperties';
import FoodPairing from 'components/detailsPage/FoodPairing/foodPairing';
import BeerDetailsHeader from 'components/detailsPage/BeerDetailsHeader/beerDetailsHeader';
import BrewingSection from 'components/detailsPage/BrewingSection/brewingSection';
import beerService from 'services/beerService';

import './beerDetailsPage.scss';

export default class BeerDetailsPage extends React.Component {
    static propTypes={
        match: PropTypes.shape({
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isExact: PropTypes.bool.isRequired,
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }

    constructor(props) {
        super(props);
        this.state = { beer: null };
        this.getBeer(this.props.match.params.id);
    }

    async getBeer(id) {
        const result = await beerService.getByID(id);
        this.setState({ beer: result });
    }

    render() {
        const { beer } = this.state;

        if (!beer) {
            return null;
        }

        return (
            <div className="beer-details-page">
                <BeerDetailsHeader beer={beer} />
                <section className="beer-details-page__properties-food-pairing">
                    <BeerProperties
                        beerColor={beer.color}
                        beerAlcohol={beer.alcohol}
                        beerBitterness={beer.internationalBitternessUnits}
                    />
                    <FoodPairing foodPairingList={beer.foodPairing} />
                </section>
                <BrewingSection brewerTips={beer.brewerTips} ingredients={beer.ingredients} method={beer.method} beerId={parseInt(this.props.match.params.id, 10)} />
            </div>
        );
    }
}
