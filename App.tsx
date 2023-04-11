import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootTab from './app/navigation/tab/RootTab';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootTab />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
