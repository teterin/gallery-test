import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import reducer from './reducer';
import saga from './saga';
import { fetchDataRequest } from './actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga, {
  url: 'https://www.holidu.de/rest/search?regionId=22458',
});
store.dispatch(fetchDataRequest());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
