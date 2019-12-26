import React from 'react';
import SideMenu__item from './sideMenu__item.jsx'

export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div class = "sideMenu">
            <div className="sideMenu__header">
                Beer catalog
            </div>
            <ul className = "sideMenu__items">
                <SideMenu__item content="Home" icon="/src/static/icons/home.svg"/>
                <SideMenu__item content="Favourite" icon="/src/static/icons/favourite.svg"/>
            </ul>
        </div>
        )
    }
}
