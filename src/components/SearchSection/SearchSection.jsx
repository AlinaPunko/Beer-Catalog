import React from 'react';
import PropTypes from 'prop-types';

import './searchSection.scss';

import SearchFilterContainer from 'components/SearchFilterContainer/SearchFilterContainer';
import Icon from 'components/Icon/Icon';

import FilterType from 'constants/filterType';

import searchIcon from 'styles/icons/search.svg';

export default class SearchSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
        this.state = { areSlidersShown: false };
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Enter' && document.activeElement === this.fieldRef.current) {
                e.preventDefault();
                this.onChangeHandler();
                this.setState({ areSlidersShown: !this.state.areSlidersShown });
            }
        });
    }


    onClickHandler = () => {
        this.setState({ areSlidersShown: !this.state.areSlidersShown });
        this.onChangeHandler();
    }

    onChangeHandler = () => {
        this.props.onChange(this.fieldRef.current.value);
    }

    render() {
        return (
            <div className="search-section">
                <div className="search-box">
                    <input type="text" ref={this.fieldRef} placeholder={this.state.areSlidersShown ? 'Punk IPA' : 'Search beers...'} className="search-box__field" />
                    <button
                        type="button"
                        className="search-box__button"
                        onClick={this.onClickHandler}
                    >
                        <Icon id={searchIcon.id} viewBox={searchIcon.viewBox} className="search-box__icon" />
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


SearchSection.propTypes = {
    onChange: PropTypes.func.isRequired,
};
