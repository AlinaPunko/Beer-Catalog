import React from 'react';
import Header__button from './header__button.jsx';


function openMenu() {
    document.getElementById("SideMenu").style.width = "250px";
  }
  
function closeMenu() {
    document.getElementById("SideMenu").style.width = "0";
}

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    render(){
        return (
        <header className="header">
                <Header__button data="src/static/icons/menu.svg"/>
                <span className="header__title">Beer catalog</span>
                <Header__button data="src/static/icons/more.svg"/>              
        </header>
        )
    }
}
