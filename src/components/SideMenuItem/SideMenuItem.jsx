import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

import './sideMenuItem.scss';

export default class SideMenuItem extends React.Component {
    render() {
        return (
            <li className="side-menu-item">
                <a href="#" className="side-menu-item__link">
                    <Icon id={this.props.image.id} viewBox={this.props.image.viewBox} className="side-menu-item__icon" />
                    <div className="side-menu-item__text">{this.props.content}</div>
                </a>
            </li>
        );
    }
}

SideMenuItem.propTypes = {
    image: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};
