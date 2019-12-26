import React from 'react';
import SVG from 'react-inlinesvg';

export default class SideMenu__item extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <li className="SideMenu__item">
            <a href='#'>
                <SVG class="SideMenu__item-icon" src={this.props.icon}></SVG>
                <span class="SideMenu__item-text">{this.props.content}</span>
            </a>
        </li>
        )
    }
}
