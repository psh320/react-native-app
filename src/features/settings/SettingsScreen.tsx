import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, SegmentedButtons } from 'react-native-paper';
import { useTheme } from '../../hooks/useTheme';
import { ThemeMode } from '../../core/themeSlice';

const SettingsScreen = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ padding: 16 }}>
        <Text
          variant="headlineMedium"
          style={{ color: theme.colors.onBackground, marginBottom: 24 }}
        >
          Settings
        </Text>

        <View style={{ marginBottom: 24 }}>
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.onBackground, marginBottom: 12 }}
          >
            Theme Preference
          </Text>
          <SegmentedButtons
            value={themeMode}
            onValueChange={value => setThemeMode(value as ThemeMode)}
            buttons={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'auto', label: 'Auto' },
            ]}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => console.log('Logout pressed')}
          style={{ marginTop: 16 }}
        >
          Logout
        </Button>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
