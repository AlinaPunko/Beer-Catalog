import React from 'react';

import { UserContext } from 'store/context/UserContext';
import beerServices from 'services/beerService';
import favouritesServices from 'services/favouritesService';
import FavouriteListItem from 'components/favouritesPage/FavouriteListItem/FavouriteListItem';
import PagingPanel from 'components/common/PagingPanel/PagingPanel';

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
        const result = await favouritesServices.getItems(this.context.userId);
        const beers = result.map(async beerId => {
            return await beerServices.getByID(beerId);
        });
        Promise.all(beers).then(beers => this.setState({ Beers: beers }));
        debugger;
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

        await favouritesServices.deleteItem(this.context.userId, item);
        const result = await favouritesServices.getItems(this.context.userId);
        const beers = result.map(async beerId => {
            return await beerServices.getByID(beerId);
        });
        Promise.all(beers).then(beers => this.setState({ Beers: beers }));

        const deletedBeer = Beers.find(
            (beer) => beer.id === item.id
        );

        Beers.splice(Beers.indexOf(deletedBeer), 1);
        this.setState({
            Beers
        });
    }

    renderBeers(currentBeers) {
        debugger;
        return currentBeers.map((beer) => (<FavouriteListItem beer={beer} key={beer.id} onDelete={this.onDelete} />));
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

FavouritesList.contextType = UserContext;