import React from 'react';
import { Provider } from 'react-redux';
// import AppRouter from './router.jsx';

import SearchContainer from './components/search_container';

const Root = ({store}) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);

export default Root;
