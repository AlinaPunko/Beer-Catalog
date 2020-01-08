import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import BeersListItem from 'components/BeersListItem/BeersListItem';

import './beersList.scss';

export default class BeersList extends React.Component {
    isFavourite(beer) {
        if (localStorageHelper.getItemsFromLocalStorage().find(
            (element) => { return element.id === beer.id; },
        )
        ) return true;
        return false;
    }

    render() {
        return (
            <div className="beers-list">
                {
                    this.props.Beers.map(
                        (beer) => {
                            const isFavourite = this.isFavourite(beer);
                            return (
                                <BeersListItem
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

BeersList.propTypes = {
    Beers: PropTypes.array.isRequired,
};
