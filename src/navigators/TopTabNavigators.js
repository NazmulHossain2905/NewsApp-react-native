import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GeneralScreen from '../screens/GeneralScreen';
import TechonologyScreen from '../screens/TechonologyScreen';
import BusinessScreen from '../screens/BusinessScreen';
import SportsScreen from '../screens/SportsScreen';
import HealthScreen from '../screens/HealthScreen';
// import EntertainmentScreen from '../screens/EntertainmentScreen';

const TopTabNavigators = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#2D2E2F', height: 50},
        tabBarActiveTintColor: '#12A5E3',
        tabBarInactiveTintColor: '#fff',
        tabBarIndicator: () => null,
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          textTransform: 'capitalize',
          fontSize: 16,
        },
      }}>
      <Tab.Screen name="General" component={GeneralScreen} />
      <Tab.Screen
        name="Tech"
        component={TechonologyScreen}
        options={{tabBarLabel: 'Technology'}}
      />
      <Tab.Screen name="Business" component={BusinessScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
      <Tab.Screen name="Health" component={HealthScreen} />
      {/* <Tab.Screen name="Entertainment" component={EntertainmentScreen} /> */}
    </Tab.Navigator>
  );
};

export default TopTabNavigators;
