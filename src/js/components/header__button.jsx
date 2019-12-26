import React from 'react';
import SVG from 'react-inlinesvg';

export default class Header__button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <button className="header__button">
                <SVG src= {this.props.data}></SVG>
            </button>
        )
    }
}