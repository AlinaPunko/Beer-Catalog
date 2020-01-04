import React from 'react';
import PropTypes from 'prop-types';

import localStorageHelper from 'helpers/localStorageHelper';

import './favouriteListItem.scss';

export default class FavouriteListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={isFavourite: true};
    }

    deleteFromFavourites(item){
        return ()=>{localStorageHelper.deleteItemFromLocalStorage(item);
            this.setState({isFavourite:! this.state.isFavourite});}
    }

    render() {
        const { item } = this.props;
        return (
            <>
            {this.state.isFavourite &&
            <div className="favourite-list-item">
                <div>
                    <div className="favourite-list-item__title">{item.name}</div>
                    <a href="#" className="favourite-list-item__tagline">{item.tagline}</a>
                    <div className="favourite-list-item__description">{item.description}</div>
                    <button type="button" className="favourite-list-item__button">Open</button>
                    <button type="button" className="favourite-list-item__button" onClick={this.deleteFromFavourites(item)}>Remove favourite</button>
                </div>
                <img alt="Item_image" className="favourite-list-item__image" src={item.image_url} />
                
            </div>}
            </>
        );
    }
}

FavouriteListItem.propTypes = {
    item: PropTypes.object.isRequired,
};
