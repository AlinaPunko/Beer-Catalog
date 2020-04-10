import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/icon';

import './header.scss';
import menu from 'styles/icons/menu.svg';
import more from 'styles/icons/more.svg';


export default class Header extends React.PureComponent {
    static propTypes = {
        openSideMenu: PropTypes.func.isRequired,
        toggleAccountMenu: PropTypes.func.isRequired
    };

    render() {
        const { openSideMenu, toggleAccountMenu } = this.props;
        return (
            <header className="header">
                <button type="button" className="header__button" onClick={openSideMenu}>
                    <Icon icon={menu} iconClassName="header__button-icon" />
                </button>
                <span className="header__title">Beer catalog</span>
                <button type="button" className="header__button" onClick={toggleAccountMenu}>
                    <Icon icon={more} iconClassName="header__button-icon" />
                </button>
            </header>
        );
    }
}
