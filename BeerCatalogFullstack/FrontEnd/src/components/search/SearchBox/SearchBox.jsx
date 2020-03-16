import React from 'react';
import PropTypes from 'prop-types';

import keyboardKeyCode from 'constants/keyboardKeyCode';
import Icon from 'components/common/Icon/icon';

import searchIcon from 'styles/icons/search.svg';
import './searchBox.scss';

export default class SearchBox extends React.Component {
    static propTypes = {
        openFiltersPanel: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    onKeyDown = (e) => {
        if (e.keyCode === keyboardKeyCode.enter) {
            e.preventDefault();
            this.props.openFiltersPanel();
            this.props.onChange(this.inputRef.current.value);
        }
    }

    search = () => {
        this.props.openFiltersPanel();
        this.props.onChange(this.inputRef.current.value);
    }

    render() {
        return (
            <div className="search-box">
                <input
                    type="text"
                    ref={this.inputRef}
                    placeholder="Search beers..."
                    className="search-box__field"
                    onKeyDown={this.onKeyDown}
                />
                <button
                    type="button"
                    className="search-box__button"
                    onClick={this.search}

                >
                    <Icon icon={searchIcon} iconClassName="search-box__icon" />
                </button>
            </div>
        );
    }
}
