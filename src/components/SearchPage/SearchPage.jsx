import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from 'store/reducers/rootReducer';
import { createStore } from 'redux';

import SearchSectionContainer from 'components/SearchSectionContainer/SearchSectionContainer';
import BeersListContainer from 'components/BeersListContainer/BeersListContainer';


import 'styles/reset.scss';
import 'styles/common.scss';


export default class SearchPage extends React.Component {
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <SearchSectionContainer />
                <BeersListContainer />
            </Provider>
        );
    }
}
