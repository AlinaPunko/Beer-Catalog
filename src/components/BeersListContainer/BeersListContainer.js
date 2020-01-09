import { connect } from 'react-redux';
import { addBeers } from 'store/actions';
import BeersList from 'components/BeersList/BeersList';

const getFilteredBeers = (beers, filter) => {
    return beers.filter((t) => t.abv <= filter.Alcohol
      && t.ebc <= filter.InternationalBitternessUnits
      && t.ibu <= filter.Color);
};

const mapStateToProps = (state) => ({
    beers: getFilteredBeers(state.beers, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
    addBeers: (result) => dispatch(addBeers(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersList);
