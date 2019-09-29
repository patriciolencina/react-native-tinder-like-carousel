import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux';
import Navigator from './screens';
const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator color="white" size="large" />}
      persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
export default App;
