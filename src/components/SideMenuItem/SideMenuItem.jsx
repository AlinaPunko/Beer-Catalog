import React from 'react';

import Icon from 'components/Icon/Icon';

import './sideMenuItem.scss';

export default class SideMenuItem extends React.PureComponent {
  render() {
    return (
        <li className="SideMenu__item">
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">
                <Icon id={this.props.image.id} viewBox={this.props.image.viewBox} className="SideMenu__item-icon" />
                <div className="SideMenu__item-text">{this.props.content}</div>
            </a>
        </li>
    );
  }
}
