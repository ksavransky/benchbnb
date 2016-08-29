import { connect } from 'react-redux';
import { requestBenches } from '../actions/bench_actions';
import Search from './search.jsx';

// const allBenches = (state) => {
//   return state ? Object.keys(state.benches).map(key => state.benches[key]) : [];
// };

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
