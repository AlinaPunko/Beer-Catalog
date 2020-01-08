import { connect } from 'react-redux';
import { setFilter } from 'store/actions';
import SearchSection from 'components/SearchSection/SearchSection';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.Filter
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (filter) => dispatch(setFilter(filter))
});


export default connect(mapDispatchToProps, mapStateToProps)(SearchSection);
