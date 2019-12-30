import React from 'react';

import './searchSlider.scss';

export default class SearchSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: this.props.minValue };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    this.setState(() => ({ currentValue: document.getElementsByClassName('searchSection__rangeSlider').valueAsNumber }));
  }

  render() {
    return (
        <div className="searchSection__searchSlider">
            <div className="searchSection__searchSlider_title">{this.props.title}</div>
            <div className="searchSection__searchSlider_value">{this.state.currentValue}</div>
            <input
                className="searchSection__rangeSlider"
                onInput={this.handleInput}
                type="range"
                min={this.props.minValue}
                max={this.props.maxValue}
            />
        </div>
    );
  }
}
