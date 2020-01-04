import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import SearchListItem from 'components/SearchListItem/SearchListItem';

import './searchList.scss';

export default class SearchList extends React.Component {
    isFavourite(beer) {
        if (localStorageHelper.getItemsFromLocalStorage().find(
            (element) => { return element.id === beer.id; },
        )
        ) return true;
        return false;
    }

    render() {
        return (
            <div className="search-list">
                {
                    this.props.Beers.map(
                        (beer) => {
                            const isFavourite = this.isFavourite(beer);
                            return (
                                <SearchListItem
                                    item={beer}
                                    isFavourite={isFavourite}
                                />
                            );
                        },
                    )
                }
            </div>
        );
    }
}

SearchList.propTypes = {
    Beers: PropTypes.array.isRequired,
};
