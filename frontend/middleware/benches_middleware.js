 import { BenchConstants,
          receiveBenches,
          requestBenches } from '../actions/bench_actions';

 import { fetchBenches } from '../util/bench_api_util.js';

 const BenchesMiddleware = ({getState, dispatch}) => next => action => {
   switch(action.type){
     case BenchConstants.REQUEST_BENCHES:
      //  const filters = ;
       const success = data => dispatch(receiveBenches(data));
       fetchBenches(success);
       break;
     default:
       next(action);
   }
 };

  export default BenchesMiddleware;
