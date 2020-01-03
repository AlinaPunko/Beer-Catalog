import React from 'react';
import PropTypes from 'prop-types';

import './searchFilter.scss';

export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentValue: ' ' };
    }

    componentDidMount() {
        this.setState({ currentValue: document.getElementsByClassName('search-filter__range-slider')[this.props.id].value });
    }

    render() {
        const {
            id, title, minValue, maxValue,
        } = this.props;
        return (
            <div className="search-filter">
                <div className="search-filter__title">{title}</div>
                <div className="search-filter__value">{this.state.currentValue}</div>
                <input
                    className="search-filter__range-slider"
                    onInput={() => { this.setState({ currentValue: document.getElementsByClassName('search-filter__range-slider')[id].value }); }}
                    type="range"
                    min={minValue}
                    max={maxValue}
                />
            </div>
        );
    }
}

SearchFilter.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
};
