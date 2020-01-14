import { connect } from 'react-redux';
import { addBeers } from 'store/actions';
import BeersList from 'components/BeersList/BeersList';

const getFilteredBeers = (beers, filter) => {
    return beers.filter((beer) => beer.abv <= filter.alcohol
      && beer.ibu <= filter.internationalBitternessUnits
      && beer.ebc <= filter.color
      && beer.name.toLowerCase().includes(filter.searchQuery.toLowerCase()));
};

const mapStateToProps = (state) => ({
    beers: getFilteredBeers(state.beers, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
    addBeers: (result) => dispatch(addBeers(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersList);
