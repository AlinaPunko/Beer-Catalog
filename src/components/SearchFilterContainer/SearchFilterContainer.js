import { connect } from 'react-redux';

import { setFilter } from 'store/actions';

import SearchFilter from 'components/SearchFilter/SearchFilter';

const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    onInput: (filter) => dispatch(setFilter(filter))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilter);
