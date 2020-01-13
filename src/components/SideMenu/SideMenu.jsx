import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SideMenuItem from 'components/SideMenuItem/SideMenuItem';

import favourite from 'styles/icons/favourite.svg';
import home from 'styles/icons/home.svg';
import './sideMenu.scss';

export default class SideMenu extends React.PureComponent {
    static propTypes = {
        showMenu: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div className={this.props.showMenu ? 'side-menu side-menu--opened' : 'side-menu side-menu--closed'}>
                <div className="side-menu__header">
                    <div className="side-menu__text">
                      Beer Catalog
                    </div>
                </div>
                <ul className="side-menu__items">
                    <li>
                        <Link to="/">
                            <SideMenuItem className="side-menu-item" text="Home" icon={home} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            <SideMenuItem className="side-menu-item" text="Favourite" icon={favourite} />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
