import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const rootRender = document.getElementById('root_weather_forecast')

if (rootRender) {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  , document.getElementById('root_weather_forecast'));
}

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
// , document.getElementById('root_weather_forecast'));

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
// , document.getElementById('root_weather_forecast'));
