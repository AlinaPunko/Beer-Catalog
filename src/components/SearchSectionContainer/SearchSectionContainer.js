import { connect } from 'react-redux';

import { setFilterByName } from 'store/actions';
import SearchSection from 'components/SearchSection/SearchSection';

const mapStateToProps = (state) => ({
    searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (searchQuery) => dispatch(setFilterByName(searchQuery))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(SearchSection);
