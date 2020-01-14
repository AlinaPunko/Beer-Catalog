import React from 'react';
import PropTypes from 'prop-types';

import './searchFilter.scss';

export default class SearchFilter extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        minValue: PropTypes.number.isRequired,
        maxValue: PropTypes.number.isRequired,
        onInput: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { currentValue: this.props.maxValue };
    }

    onInputHandler = (e) => {
        const currentValue = e.currentTarget.value;
        this.setState({ currentValue });
        const filter = {
            type: this.props.type,
            value: currentValue
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
                <div className="search-filter__value">{currentValue}</div>
                <input
                    className="search-filter__range-slider"
                    onChange={this.onInputHandler}
                    type="range"
                    defaultValue={maxValue}
                    min={minValue}
                    max={maxValue}
                />
            </div>
        );
    }
}
