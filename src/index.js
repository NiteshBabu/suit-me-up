import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Shop'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Shop />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);
