import React from 'react';
import Reactdom from 'react-dom';

import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchSection from 'components/SearchSection/SearchSection';
import SearchList from 'components/SearchList/SearchList';
import SearchListItem from 'components/SearchListItem/SearchListItem';

import 'styles/reset.scss';
import 'styles/common.scss';

import services from 'services/services.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: true};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    async componentDidMount() {
        const result = await services.getAllBeers();
        this.setState({
            Beers: result.map((beer) => (<SearchListItem item={beer}></SearchListItem>))
        });
    }

    render() {
        return (
          <div className="App">
            <Header toggleFunction={this.toggleMenu}/>
            <SideMenu showMenu={this.state.showMenu}/>
            <SearchList Beers={this.state.Beers}>                
            </SearchList>
          </div>
        );
    }
}


Reactdom.render(
  <App />,
    document.getElementById('app'),
);
