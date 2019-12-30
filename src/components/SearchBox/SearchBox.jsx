import React from 'react';

import Icon from 'components/Icon/Icon';

import './searchBox.scss';

export default class SearchBox extends React.Component {
  render() {
    return (
        <div className="SearchBox">
            <input type="text" placeholder="Punk IPA" className="SearchBox__field" />
            <Icon id={this.props.image.id} viewBox={this.props.image.viewBox} className="SearchBox__icon" />
        </div>
    );
  }
}
