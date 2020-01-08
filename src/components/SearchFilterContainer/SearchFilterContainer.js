import { connect } from 'react-redux';
import { setFilter } from 'store/actions';
import SearchFilter from 'components/SearchFilter/SearchFilter';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilter);
