import React from 'react';
import Reactdom from 'react-dom';

import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';

import 'styles/reset.scss';
import 'styles/common.scss';

import services from 'services/services.js';
import SearchSection from 'components/SearchSection/SearchSection.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: true };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    async render() {
    alert(await services.getAllBeers());
        return (
          <div className="App">
              
          </div>
        );
    }
}


Reactdom.render(
  <App />,
    document.getElementById('app'),
);
