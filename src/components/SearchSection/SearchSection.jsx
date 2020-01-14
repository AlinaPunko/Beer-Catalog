import React from 'react';

import FiltersPanel from 'components/FiltersPanel/FiltersPanel';
import SearchBoxContainer from 'components/SearchBoxContainer/SearchBoxContainer';

import './searchSection.scss';

export default class SearchSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isFiltersPanelShown: false };
    }


    openFiltersPanel =() => {
        this.setState({ isFiltersPanelShown: true });
    }

    render() {
        return (
            <div className="search-section">
                <SearchBoxContainer openFiltersPanel={this.openFiltersPanel} />

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
