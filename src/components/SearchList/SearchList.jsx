import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import SearchListItem from 'components/SearchListItem/SearchListItem';

import './searchList.scss';

export default class SearchList extends React.Component {
    isFavourite(beer) {
        if (localStorageHelper.getItemsFromLocalStorage().find(
            (element) => element.id === beer.id,
        )
        ) return true;
        return false;
    }

    render() {
        return (
            <div className="search-list">
                {
                    this.props.Beers.map(
                        (beer) => (
                            <SearchListItem
                                item={beer}
                                isFavourite={this.isFavourite(beer)}
                            />
                        ),
                    )
                }
            </div>
        );
    }
}

SearchList.propTypes = {
    Beers: PropTypes.array.isRequired,
};
