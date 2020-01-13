import React from 'react';
import PropTypes from 'prop-types';

import FiltersPanel from 'components/FiltersPanel/FiltersPanel';
import Icon from 'components/Icon/Icon';
import keyboardKeyCode from 'constants/keyboardKeyCode';

import searchIcon from 'styles/icons/search.svg';
import './searchSection.scss';

export default class SearchSection extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = { isFiltersPanelShown: false };
    }

    onInputKeyDown = (e) => {
        if (e.keyCode === keyboardKeyCode.enter) {
            e.preventDefault();
            this.onSearchButtonClick();
        }
    }


    onSearchButtonClick = () => {
        this.setState({ isFiltersPanelShown: true });
        this.props.onChange(this.inputRef.current.value);
    }

    render() {
        return (
            <div className="search-section">
                <div className="search-box">
                    <input
                        type="text"
                        ref={this.inputRef}
                        placeholder="Search beers..."
                        className="search-box__field"
                        onKeyDown={this.onInputKeyDown}
                    />
                    <button
                        type="button"
                        className="search-box__button"
                        onClick={this.onSearchButtonClick}

                    >
                        <Icon icon={searchIcon} iconClassName="search-box__icon" />
                    </button>
                </div>
                { this.state.isFiltersPanelShown
                && (
                    <>
                        <FiltersPanel />
                    </>
                )}
            </div>
        );
    }
}
