import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const store = createStore(reducers);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
