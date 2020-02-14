import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import Routing from 'components/Routing/Routing';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    openMenu = () => {
        this.setState({ showMenu: true });
    }

    closeMenu = () => {
        this.setState({ showMenu: false });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header openFunction={this.openMenu} />
                    <SideMenu showMenu={this.state.showMenu} closeFunction={this.closeMenu} />
                    <Routing />
                </div>
            </Router>
        );
    }
}
