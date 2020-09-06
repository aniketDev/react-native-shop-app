import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
