import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreen';
import DetailsScreen from '../screens/DetailsScreen';

const StackNavigators = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigators;
