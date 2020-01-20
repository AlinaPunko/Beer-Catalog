import React from 'react';
import PropTypes from 'prop-types';

import BeerPropertyItem from 'components/detailsPage/BeerPropertyItem/BeerPropertyItem';

import './beerProperties.scss';

export default class BeerProperties extends React.PureComponent {
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
                    <BeerPropertyItem acronym="ABV" name="Alcohol by volume" value={beerColor} />
                    <BeerPropertyItem acronym="IBU" name="International bitterness units" value={beerBitterness} />
                    <BeerPropertyItem acronym="EBC" name="Color by EBC" value={beerAlcohol} />
                </ul>
            </div>

        );
    }
}
