import React from 'react';

import ImageSearchStack from './Navigator/Navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <ImageSearchStack />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
