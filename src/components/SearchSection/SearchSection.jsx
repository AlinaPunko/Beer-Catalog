import React from 'React';

import './searchSection.scss';

import SearchSlider from 'components/SearchSlider/SearchSlider';
import SearchBox from 'components/SearchBox/SearchBox';

import search_icon from 'styles/icons/more.svg';

export default class SearchSection extends React.Component {
  render() {
    return (
        <div className="SearchSection">
            <SearchBox />
            <SearchSlider minValue="2" maxValue="14" title="Alcohol by volume" />
            <SearchSlider minValue="0" maxValue="120" title="Internationsl bitterness units" />
            <SearchSlider minValue="4" maxValue="80" title="Color by EBC" />
        </div>
    );
  }
}
