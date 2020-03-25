import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { UserContext } from 'store/context/userContext';
import SideMenuLink from 'components/SideMenuLink/sideMenuLink';
import routing from 'constants/routing';

import favorite from 'styles/icons/favorite.svg';
import home from 'styles/icons/home.svg';
import list from 'styles/icons/list.svg';
import './sideMenu.scss';

export default class SideMenu extends React.PureComponent {
    static propTypes = {
        showMenu: PropTypes.bool.isRequired,
        closeMenu: PropTypes.func.isRequired
    };

    render() {
        const menuClass = classNames('side-menu', {
            'side-menu--opened': this.props.showMenu,
            'side-menu--closed': !this.props.showMenu
        });

        return (
            <UserContext.Consumer>
                {({ userId }) => (
                    <div className={menuClass} onClick={this.props.closeMenu}>
                        <div className="side-menu__header">
                            Beer Catalog
                        </div>
                        <ul className="side-menu__links">
                            <li>
                                <Link to={routing.searchPage.url}>
                                    <SideMenuLink text="Home" icon={home} />
                                </Link>
                            </li>
                            {userId
                                && (
                                    <>
                                        <li>
                                            <Link to={routing.favoritesList.url}>
                                                <SideMenuLink text="Favorite" icon={favorite} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={routing.brewsList.url}>
                                                <SideMenuLink text="Brews" icon={list} />
                                            </Link>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}
