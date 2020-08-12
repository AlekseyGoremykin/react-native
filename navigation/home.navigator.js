import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import DetailsScreen from '~/screens/Details';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Marvel" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default HomeNavigator;
