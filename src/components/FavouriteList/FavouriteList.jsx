import React from 'react';
import PropTypes from 'prop-types';


import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';

import './favouriteList.scss';

export default class SearchList extends React.Component {
    render() {
        return (
            <div className="favourite-list">
                {
                    this.props.Beers.map(
                        (beer) => (
                            <FavouriteListItem
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
