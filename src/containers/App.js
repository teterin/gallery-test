import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import List from './List';

const App = ({ store }) =>
  (<Provider store={store}>
    <List />
  </Provider>);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
