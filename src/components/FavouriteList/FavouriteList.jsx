import React from 'react';

import localStorageHelper from 'helpers/localStorageHelper';

import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';

import './favouriteList.scss';

export default class BeersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Beers: [],
            currentPage: 1
        };
    }

    async componentDidMount() {
        const result = await localStorageHelper.getItemsFromLocalStorage();
        this.setState({ Beers: result });
    }

    handleClick = (event) => {
        if (this.state.currentPage !== Number(event.target.id)) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }
    }

    onDelete = (item) => {
        localStorageHelper.deleteItemFromLocalStorage(item);
        const newBeers = this.state.Beers;
        const deletedBeer = newBeers.find(
            (beer) => beer.id === item.id
        );
        newBeers.splice(newBeers.indexOf(deletedBeer), 1);
        this.setState({
            Beers: newBeers
        });
    }

    render() {
        const { Beers, currentPage } = this.state;

        const indexOfLastBeer = currentPage * 5;
        const indexOfFirstBeer = indexOfLastBeer - 5;
        const currentBeers = Beers.slice(indexOfFirstBeer, indexOfLastBeer);
        const pageNumbers = [];

        if (this.state.currentPage > 1) {
            pageNumbers.push(this.state.currentPage - 1);
        }
        pageNumbers.push(this.state.currentPage);
        if (this.state.currentPage < Math.ceil(Beers.length / 5)) {
            pageNumbers.push(this.state.currentPage + 1);
        }

        return (
            <div className="favourite-list">
                <div className="favourite-list__title">Your favourite beers</div>
                <div className="favourite-list__beers">
                    {currentBeers.map((beer) => (
                        <FavouriteListItem
                            item={beer}
                            key={beer.id}
                            onDelete={this.onDelete}
                        />
                    ))}
                    {this.state.Beers.length > 5 && (
                        <ul className="paging-panel">
                            <button
                                type="button"
                                onClick={this.handleClick}
                                className="paging-panel__item"
                                id={1}
                                key={1}
                            >
                                <li
                                    id={1}
                                    key={1}
                                >
                                &laquo;
                                </li>
                            </button>
                            {pageNumbers.map((number) => (
                                <button
                                    type="button"
                                    onClick={this.handleClick}
                                    className="paging-panel__item"
                                    id={number}
                                    key={number}
                                >
                                    <li
                                        key={number}
                                        id={number}
                                    >
                                        {number}
                                    </li>
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={this.handleClick}
                                className="paging-panel__item"
                                key={Math.ceil(Beers.length / 5)}
                                id={Math.ceil(Beers.length / 5)}
                            >
                                <li
                                    id={Math.ceil(Beers.length / 5)}
                                    key={Math.ceil(Beers.length / 5)}
                                >
                                &raquo;
                                </li>
                            </button>
                        </ul>
                    ) }

                </div>
            </div>
        );
    }
}
