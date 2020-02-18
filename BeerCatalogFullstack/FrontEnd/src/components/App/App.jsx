import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {UserContext} from 'store/context/UserContext';
import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import AccountMenu from 'components/AccountMenu/AccountMenu';
import Routing from 'components/Routing/Routing';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.setUserId = (userId) => {
            debugger;
            this.setState(() => ({
              userId: userId
            }));
        };

        this.state = {
            showSideMenu: false,
            showAccountMenu: false,
            userId: "",
            setUserId: this.setUserId
        };
    }


    openSideMenu = () => {
        this.setState({ showSideMenu: true });
    }

    closeSideMenu = () => {
        this.setState({ showSideMenu: false });
    }

    toggleAccountMenu = () => {
        this.setState({ showAccountMenu: !this.state.showAccountMenu });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Router>
                    <div className="App">
                        <Header openSideMenuFunction={this.openSideMenu} toggleAccountMenuFunction={this.toggleAccountMenu} />
                        <SideMenu showMenu={this.state.showSideMenu} closeFunction={this.closeSideMenu} />
                        <AccountMenu showMenu={this.state.showAccountMenu}/>
                        <Routing />
                    </div>
                </Router>
            </UserContext.Provider>
        );
    }
}
