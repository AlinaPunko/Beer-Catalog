import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import SideMenuLink from 'components/SideMenuLink/SideMenuLink';
import signIn from 'styles/icons/signin.svg';
import signUp from 'styles/icons/signUp.svg';
import signOut from 'styles/icons/signOut.svg';


import './accountMenu.scss';

export default class AccountMenu extends React.PureComponent {
    static propTypes = {
        showMenu: PropTypes.bool.isRequired
    };

    render() {
        let menuClass = 'account-menu';
        if (this.props.showMenu) {
            menuClass += ' account-menu--opened';
        } else menuClass += ' account-menu--closed';

        return (
            <div className={menuClass}>
                <ul className="account-menu__links">
                    <li>
                        <Link to="/login">
                            <SideMenuLink text="Sign In" icon={signIn} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/join">
                            <SideMenuLink text="Sign Up" icon={signUp} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <SideMenuLink text="Sign Out" icon={signOut} />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
