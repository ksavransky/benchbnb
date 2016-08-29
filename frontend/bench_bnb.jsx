import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
// //Actions
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  let store = window.Store = configureStore();


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
