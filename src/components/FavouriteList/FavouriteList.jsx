import React from 'react';

import localStorageHelper from 'helpers/localStorageHelper';

import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';
import PagingPanel from 'components/PagingPanel/PagingPanel';

import './favouriteList.scss';

export default class BeersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Beers: [] };
    }

    async componentDidMount() {
        const result = await localStorageHelper.getItemsFromLocalStorage();
        this.setState({ Beers: result });
    }

    render() {
        return (
            <div>
                <div className="favourite-list__title">Your favourite beers</div>
                { this.state.Beers
            && (
                <div className="favourite-list">
                    {
                        this.state.Beers.map(
                            (beer) => (
                                <FavouriteListItem
                                    item={beer}
                                />
                            ),
                        )
                    }
                    {
                        this.state.Beers.length > 4 && <PagingPanel />
                    }
                </div>
            )}
            </div>
        );
    }
}
