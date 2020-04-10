import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { UserContext } from 'store/context/userContext';
import SideMenuLink from 'components/SideMenuLink/sideMenuLink';
import serviceWrapper from 'helpers/serviceWrapper';
import userService from 'services/userService';
import routing from 'constants/routing';

import signIn from 'styles/icons/signin.svg';
import signUp from 'styles/icons/signup.svg';
import signOut from 'styles/icons/signout.svg';
import account from 'styles/icons/account.svg';
import './accountMenu.scss';

export default class AccountMenu extends React.PureComponent {
    static propTypes = {
        showMenu: PropTypes.bool.isRequired,
        closeMenu: PropTypes.func.isRequired
    };

    static contextType = UserContext;

    signOut = () => {
        this.context.setUserId(null);
        serviceWrapper.callService(userService.signOut, null, null);
    }

    renderAuthorisedUserMenuLinks = () => {
        return (
            <>
                <li>
                    <Link to={routing.profilePage.url}>
                        <SideMenuLink text="My Profile" icon={account} />
                    </Link>
                </li>
                <li onClick={this.signOut}>
                    <Link to={routing.searchPage.url}>
                        <SideMenuLink text="Sign Out" icon={signOut} />
                    </Link>
                </li>
            </>
        );
    }

    renderUnauthorisedUserMenuLinks = () => {
        return (
            <>
                <li>
                    <Link to={routing.signInPage.url}>
                        <SideMenuLink text="Sign In" icon={signIn} />
                    </Link>
                </li>
                <li>
                    <Link to={routing.signUpPage.url}>
                        <SideMenuLink text="Sign Up" icon={signUp} />
                    </Link>
                </li>
            </>
        );
    }

    render() {
        const menuClass = classNames('account-menu', {
            'account-menu--opened': this.props.showMenu,
            'account-menu--closed': !this.props.showMenu
        });
        const { userId } = this.context;
        const menuLinks = userId ? this.renderAuthorisedUserMenuLinks() : this.renderUnauthorisedUserMenuLinks();

        return (
            <div className={menuClass} onClick={this.props.closeMenu}>
                <ul className="account-menu__links">
                    {menuLinks}
                </ul>
            </div>
        );
    }
}
