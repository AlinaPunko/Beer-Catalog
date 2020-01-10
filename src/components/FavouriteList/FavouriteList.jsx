import React from 'react';

import localStorageHelper from 'helpers/localStorageHelper';

import FavouriteListItem from 'components/FavouriteListItem/FavouriteListItem';

import './favouriteList.scss';

export default class BeersList extends React.PureComponent {
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
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { Beers, currentPage } = this.state;

        const indexOfLastBeer = currentPage * 5;
        const indexOfFirstBeer = indexOfLastBeer - 5;
        const currentBeers = Beers.slice(indexOfFirstBeer, indexOfLastBeer);

        const renderBeers = currentBeers.map((beer) => {
            return <FavouriteListItem item={beer} id={beer.id} />;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Beers.length / 5); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map((number) => {
            return (
                <button
                    type="button"
                    onClick={this.handleClick}
                    className="paging-panel__item"
                >
                    <li
                        key={number}
                        id={number}
                    >
                        {number}
                    </li>
                </button>
            );
        });
        return (
            <>
                <div className="favourite-list__title">Your favourite beers</div>
                <div className="favourite-list">
                    {renderBeers}
                    <ul className="paging-panel">
                        {renderPageNumbers}
                    </ul>
                </div>
            </>
        );
    }
    // return (
    //     <div>
    //         <div className="favourite-list__title">Your favourite beers</div>
    //         { this.state.Beers
    //         && (
    //             <div className="favourite-list">
    //                 {
    //                     this.state.Beers.map(
    //                         (beer) => (
    //                             <FavouriteListItem
    //                                 item={beer}
    //                             />
    //                         ),
    //                     )
    //                 }
    //                 {
    //                     this.state.Beers.length > 4 && <PagingPanel />
    //                 }
    //             </div>
    //         )}
    //     </div>
    // );
}
