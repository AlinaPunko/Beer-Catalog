import React from 'react';
import PropTypes from 'prop-types';

import './searchFilter.scss';

export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentValue: this.props.maxValue };
    }

    onInputHandler = (e) => {
        this.setState({ currentValue: e.currentTarget.value });
        const filter = {
            type: this.props.type,
            value: this.state.currentValue
        };
        this.props.onInput(filter);
    }

    render() {
        const {
            title, minValue, maxValue,
        } = this.props;
        const { currentValue } = this.state;

        return (
            <div className="search-filter">
                <div className="search-filter__title">{title}</div>
                <div className="search-filter__value">{this.state.currentValue}</div>
                <input
                    className="search-filter__range-slider"
                    onInput={this.onInputHandler}
                    type="range"
                    value={currentValue}
                    min={minValue}
                    max={maxValue}
                />
            </div>
        );
    }
}

SearchFilter.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
};
