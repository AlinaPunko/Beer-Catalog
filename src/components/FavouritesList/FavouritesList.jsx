import React from 'react';

import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';
import localStorageHelper from 'helpers/localStorageHelper';

import './favouritesList.scss';

export default class FavouritesList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Beers: [],
            currentPage: 1
        };
    }

    async componentDidMount() {
        const result = await localStorageHelper.getItems();
        this.setState({ Beers: result });
    }

    onPageNumberClick = (event) => {
        if (this.state.currentPage !== Number(event.target.id)) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }
    }

    onDelete = (item) => {
        localStorageHelper.deleteItem(item);
        const newBeers = this.state.Beers;
        const deletedBeer = newBeers.find(
            (beer) => beer.id === item.id
        );
        newBeers.splice(newBeers.indexOf(deletedBeer), 1);
        this.setState({
            Beers: newBeers
        });
    }

    renderBeers(currentBeers) {
        return currentBeers.map((beer) => (<FavouriteListItem item={beer} key={beer.id} onDelete={this.onDelete} />));
    }

    render() {
        const { Beers, currentPage } = this.state;

        const indexOfLastBeer = currentPage * 5;
        const indexOfFirstBeer = indexOfLastBeer - 5;
        const currentBeers = Beers.slice(indexOfFirstBeer, indexOfLastBeer);
        const pageNumbers = [];

        if (currentPage > 1) {
            pageNumbers.push(currentPage - 1);
        }
        pageNumbers.push(currentPage);
        if (currentPage < Math.ceil(Beers.length / 5)) {
            pageNumbers.push(currentPage + 1);
        }

        return (
            <div className="favourite-list">
                <div className="favourite-list__title">Your favourite beers</div>
                <div className="favourite-list__beers">
                    {this.renderBeers(currentBeers)}
                    {this.state.Beers.length > 5 && (
                        <ul className="paging-panel">
                            <li
                                id={1}
                                key={1}
                            >
                                <button
                                    type="button"
                                    onClick={this.onPageNumberClick}
                                    className="paging-panel__item"
                                    id={1}
                                    key={1}
                                >
                                &laquo;
                                </button>
                            </li>
                            {pageNumbers.map((number) => (

                                <li
                                    key={number}
                                    id={number}
                                >
                                    <button
                                        type="button"
                                        onClick={this.onPageNumberClick}
                                        className="paging-panel__item"
                                        id={number}
                                        key={number}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                            <li
                                id={Math.ceil(Beers.length / 5)}
                                key={Math.ceil(Beers.length / 5)}
                            >
                                <button
                                    type="button"
                                    onClick={this.onPageNumberClick}
                                    className="paging-panel__item"
                                    key={Math.ceil(Beers.length / 5)}
                                    id={Math.ceil(Beers.length / 5)}
                                >
                                &raquo;
                                </button>
                            </li>
                        </ul>
                    ) }

                </div>
            </div>
        );
    }
}
