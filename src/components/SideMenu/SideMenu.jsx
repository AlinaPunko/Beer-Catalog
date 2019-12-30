import React from 'react';

import SideMenuItem from 'components/SideMenuItem/SideMenuItem';

import favourite from 'styles/icons/favourite.svg';
import home from 'styles/icons/home.svg';

import './sideMenu.scss';

export default class SideMenu extends React.Component {
  render() {
    return (
        <div className="sideMenu">
            { this.props.showMenu
              && (
              <div>
                  <div className="sideMenu__header" />
                  <ul className="sideMenu__items">
                      <SideMenuItem className="sideMenu__item" content="Home" image={home} />
                      <SideMenuItem className="sideMenu__item" content="Favourite" image={favourite} />
                  </ul>
              </div>
              )}
        </div>
    );
  }
}
