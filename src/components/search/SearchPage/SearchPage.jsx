import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SearchSection from 'components/search/SearchSection/SearchSection';
import BeersListContainer from 'components/beersList/BeersListContainer/BeersListContainer';
import rootReducer from 'store/reducers/rootReducer';

export default class SearchPage extends React.PureComponent {
    constructor() {
        super();
        this.store = createStore(rootReducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <SearchSection />
                <BeersListContainer />
            </Provider>
        );
    }
}
