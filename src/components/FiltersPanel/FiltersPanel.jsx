import React from 'react';

import filterType from 'constants/filterType';
import sliderValue from 'constants/sliderValue';
import SearchFilterContainer from 'components/SearchFilterContainer/SearchFilterContainer';


export default class FiltersPanel extends React.Component {
    render() {
        return (
            <>
                <SearchFilterContainer
                    type={filterType.alcohol}
                    minValue={sliderValue.minAlcoholValue}
                    maxValue={sliderValue.maxAlcoholValue}
                    title="Alcohol by volume"
                />
                <SearchFilterContainer
                    type={filterType.internationalBitternessUnits}
                    minValue={sliderValue.minInternationalBitternessUnitsValue}
                    maxValue={sliderValue.maxInternationalBitternessUnitsValue}
                    title="International bitterness units"
                />
                <SearchFilterContainer
                    type={filterType.color}
                    minValue={sliderValue.minColorValue}
                    maxValue={sliderValue.maxColorValue}
                    title="Color by EBC"
                />
            </>
        );
    }
}
