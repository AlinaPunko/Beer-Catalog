import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';

import './favouriteList.scss';

export default class SearchList extends React.Component {
    constructor(props){
        super(props);
        this.state={Beers:[]};
    }

    async componentDidMount(){
        const result = await localStorageHelper.getItemsFromLocalStorage();
        this.setState({Beers: result});
    }

    render() {
        return (
            <div>
            { this.state.Beers &&
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
            </div>
            }
            </div>
        );
    }
}
