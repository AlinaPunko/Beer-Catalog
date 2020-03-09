import React from 'react';

import { UserContext } from 'store/context/userContext';
import beerServices from 'services/beerService';
import favoritesServices from 'services/favoritesService';
import FavoriteListItem from 'components/favoritesPage/FavoriteListItem/favoriteListItem';
import PagingPanel from 'components/common/PagingPanel/pagingPanel';

import './favoritesList.scss';

export default class FavoritesList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Beers: [],
            currentPage: 1
        };
    }

    async componentDidMount() {
        const result = await favoritesServices.getItems(this.context.userId);
        const beers = result.map(async (beerId) => {
            return beerServices.getByID(beerId);
        });
        Promise.all(beers).then((beersArray) => this.setState({ Beers: beersArray }));
    }

    onPageNumberClick = (event) => {
        if (this.state.currentPage !== Number(event.target.id)) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }
    }

    onDelete = async (item) => {
        const { Beers } = this.state;

        await favoritesServices.deleteItem(this.context.userId, item);
        const result = await favoritesServices.getItems(this.context.userId);
        const beers = result.map(async (beerId) => {
            return beerServices.getByID(beerId);
        });
        Promise.all(beers).then((beersArray) => this.setState({ Beers: beersArray }));

        const deletedBeer = Beers.find(
            (beer) => beer.id === item.id
        );

        Beers.splice(Beers.indexOf(deletedBeer), 1);
        this.setState({
            Beers
        });
    }

    renderBeers(currentBeers) {
        return currentBeers.map((beer) => (<FavoriteListItem beer={beer} key={beer.id} onDelete={this.onDelete} />));
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
            <div className="favorite-list">
                <div className="favorite-list__title">Your favorite beers</div>
                <div className="favorite-list__beers">
                    {this.renderBeers(currentBeers)}
                    {
                        this.state.Beers.length > 5
                            && (
                                <PagingPanel
                                    pageNumbers={pageNumbers}
                                    onPageNumberClick={this.onPageNumberClick}
                                    collectionLength={this.state.Beers.length}
                                />
                            )
                    }
                </div>
            </div>
        );
    }
}

FavoritesList.contextType = UserContext;
