import React from 'react';
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
