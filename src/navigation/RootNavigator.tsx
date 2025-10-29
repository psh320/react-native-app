import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      {/* Add more screens here later:
        - Auth screens (Login, Signup)
        - Onboarding
        - Modal screens
        - Detail screens that hide tabs
      */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
