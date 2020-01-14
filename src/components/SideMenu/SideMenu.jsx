import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SideMenuLink from 'components/SideMenuLink/SideMenuLink';

import favourite from 'styles/icons/favourite.svg';
import home from 'styles/icons/home.svg';
import './sideMenu.scss';

export default class SideMenu extends React.PureComponent {
    static propTypes = {
        showMenu: PropTypes.bool.isRequired,
        closeFunction: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className={this.props.showMenu ? 'side-menu side-menu--opened' : 'side-menu side-menu--closed'} onClick={this.props.closeFunction}>
                <div className="side-menu__header">
                      Beer Catalog
                </div>
                <ul className="side-menu__links">
                    <li>
                        <Link to="/">
                            <SideMenuLink text="Home" icon={home} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            <SideMenuLink text="Favourite" icon={favourite} />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
