import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../../hooks/useTheme';

const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{ flex: 1, backgroundColor: theme.colors.background, padding: 16 }}
    >
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.onBackground, marginBottom: 16 }}
      >
        Welcome to Home
      </Text>
      <Text variant="bodyLarge" style={{ color: theme.colors.onBackground }}>
        This is the home screen
      </Text>
    </View>
  );
};

export default HomeScreen;
