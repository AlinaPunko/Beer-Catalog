import React from 'React';

import './searchSection.scss';

import SearchSlider from '../SearchSlider/SearchSlider';
import SearchBox from '../SearchBox/SearchBox';

export default class SearchSection extends React.Component {
  render() {
    return (
        <div className="SearchSection">
            <SearchSlider minValue="10" maxValue="40" title="Hello" />
        </div>
    );
  }
}
