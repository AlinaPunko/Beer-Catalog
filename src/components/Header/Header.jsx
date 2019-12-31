import React from 'react';

import './header.scss';

import menu from 'styles/icons/menu.svg';
import more from 'styles/icons/more.svg';

import Icon from 'components/Icon/Icon';

export default class Header extends React.PureComponent {
  render() {
    return (
        <header className="header">
            <button type="button" className="header__button" onClick={this.props.toggleFunction}>
                <Icon id={menu.id} viewBox={menu.viewBox} className="header__button-icon" />
            </button>
            <span className="header__title">Beer catalog</span>
            <button type="button" className="header__button">
                <Icon id={more.id} viewBox={more.viewBox} className="header__button-icon" />
            </button>
        </header>
    );
  }
}
