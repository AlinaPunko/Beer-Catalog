import React from 'react';

import './searchSection.scss';

import SearchFilterContainer from 'components/SearchFilterContainer/SearchFilterContainer';
import Icon from 'components/Icon/Icon';

import FilterType from 'constants/filterType';

import searchIcon from 'styles/icons/search.svg';

export default class SearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { areSlidersShown: false };
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                this.setState({ areSlidersShown: !this.state.areSlidersShown });
            }
        });
    }

    onClickHandler() {
        return () => {
            this.setState({ areSlidersShown: !this.state.areSlidersShown });
        };
    }

    render() {
        return (
            <div className="SearchSection">
                <div className="SearchBox">
                    <input type="text" placeholder={this.state.areSlidersShown ? 'Punk IPA' : 'Search beers...'} className="SearchBox__field" />
                    <button
                        type="button"
                        className="SearchBox__button"
                        onClick={this.onClickHandler()}
                    >
                        <Icon id={searchIcon.id} viewBox={searchIcon.viewBox} className="SearchBox__icon" />
                    </button>
                </div>
                { this.state.areSlidersShown
            && (
                <>
                    <SearchFilterContainer type={FilterType.Alcohol} minValue={2} maxValue={14} title="Alcohol by volume" />
                    <SearchFilterContainer type={FilterType.InternationalBitternessUnits} minValue={0} maxValue={120} title="International bitterness units" />
                    <SearchFilterContainer type={FilterType.Color} minValue={4} maxValue={80} title="Color by EBC" />
                </>
            )}
            </div>
        );
    }
}
