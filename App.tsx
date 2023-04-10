import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './app/navigation/stack/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
