import React from 'react';
import PropTypes from 'prop-types';

import './searchList.scss';

export default class SearchList extends React.Component {
  // Component.propTypes ={
  //     Beers: PropTypes.array
  // }

  render() {
    return (
        <div className="searchList">
            {this.props.Beers}
        </div>
    );
  }
}
