import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import SideMenuItem from 'components/SideMenuItem/SideMenuItem';

import favourite from 'styles/icons/favourite.svg';
import home from 'styles/icons/home.svg';

import './sideMenu.scss';

// import SearchList from 'components/SearchList/SearchList';
import FavouriteList from 'components/FavouriteList/FavouriteList';

export default class SideMenu extends React.Component {
    render() {
        return (
            <Router>
                <div className={this.props.showMenu ? 'side-menu--opened' : 'side-menu--closed'}>
                    <div className="side-menu__header">
                        <div className="side-menu__text">
                      Beer Catalog
                        </div>
                    </div>
                    <ul className="side-menu__items">
                        <Link to="/">
                            <SideMenuItem className="side-menu-item" content="Home" image={home} />
                        </Link>
                        <Link to="/favourites">
                            <SideMenuItem className="side-menu-item" content="Favourite" image={favourite} />
                        </Link>
                    </ul>
                    <Switch>
                        <Route path="/" />
                        <Route path="/favourites">
                            <FavouriteList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

SideMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
};
