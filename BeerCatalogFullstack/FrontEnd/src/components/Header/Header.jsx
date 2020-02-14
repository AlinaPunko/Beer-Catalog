import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/Icon';

import './header.scss';
import menu from 'styles/icons/menu.svg';
import more from 'styles/icons/more.svg';


export default class Header extends React.PureComponent {
    static propTypes = {
        openFunction: PropTypes.func.isRequired
    };

    render() {
        return (
            <header className="header">
                <button type="button" className="header__button" onClick={this.props.openFunction}>
                    <Icon icon={menu} iconClassName="header__button-icon" />
                </button>
                <span className="header__title">Beer catalog</span>
                <button type="button" className="header__button">
                    <Icon icon={more} iconClassName="header__button-icon" />
                </button>
            </header>
        );
    }
}
