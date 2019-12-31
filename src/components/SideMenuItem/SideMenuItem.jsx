import React from 'react';

import Icon from 'components/Icon/Icon';

import './sideMenuItem.scss';

export default class SideMenuItem extends React.Component {
  render() {
    return (
        <li className="SideMenu__item">
            <a href="#" className="SideMenu__item_link">
                <Icon id={this.props.image.id} viewBox={this.props.image.viewBox} className="SideMenu__item-icon" />
                <div className="SideMenu__item-text">{this.props.content}</div>
            </a>
        </li>
    );
  }
}
