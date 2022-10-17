import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigators from './src/navigators/StackNavigators';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#12A5E3'} />

      <NavigationContainer>
        <StackNavigators />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
