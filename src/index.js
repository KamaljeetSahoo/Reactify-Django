import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from './store/reducers/auth'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


