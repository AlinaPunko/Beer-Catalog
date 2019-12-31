import React from 'react';

import './searchList.scss';

export default class SearchList extends React.Component {
  render() {
    return (
        <div className="searchList">
            {this.props.Beers}
        </div>
    );
  }
}
