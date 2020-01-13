import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from 'store/reducers/rootReducer';
import { createStore } from 'redux';

import SearchSectionContainer from 'components/SearchSectionContainer/SearchSectionContainer';
import BeersListContainer from 'components/BeersListContainer/BeersListContainer';

export default class SearchPage extends React.PureComponent {
    constructor() {
        super();
        this.store = createStore(rootReducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <SearchSectionContainer />
                <BeersListContainer />
            </Provider>
        );
    }
}
