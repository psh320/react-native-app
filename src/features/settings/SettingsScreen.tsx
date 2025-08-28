import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../core/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: theme.spacing.large,
    },
    title: {
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.large,
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: theme.spacing.medium,
      paddingHorizontal: theme.spacing.large,
      backgroundColor: theme.colors.card,
      borderRadius: 8,
      marginVertical: theme.spacing.small,
    },
    settingText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
    },
  });

const SettingsScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{
            false: theme.colors.border,
            true: theme.colors.primary,
          }}
          thumbColor={isDarkMode ? theme.colors.background : theme.colors.text}
        />
      </View>
      <PrimaryButton onPress={() => {}} text="Logout" />
    </View>
  );
};

export default SettingsScreen;
