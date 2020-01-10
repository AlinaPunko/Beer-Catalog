import { connect } from 'react-redux';
import { setFilterByName } from 'store/actions';
import SearchSection from 'components/SearchSection/SearchSection';

const mapStateToProps = (state) => ({
    name: state.name
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (name) => dispatch(setFilterByName(name))
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(SearchSection);
