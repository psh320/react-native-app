import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, RootState } from './src/core/store';
import MainNavigator from './src/navigation/MainNavigator';
import { lightTheme, darkTheme } from './src/core/theme';

const queryClient = new QueryClient();

const AppContent = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  // Create navigation theme based on your app theme
  const navigationTheme = {
    dark: isDarkMode,
    colors: {
      primary: isDarkMode
        ? darkTheme.colors.primary
        : lightTheme.colors.primary,
      background: isDarkMode
        ? darkTheme.colors.background
        : lightTheme.colors.background,
      card: isDarkMode ? darkTheme.colors.card : lightTheme.colors.card,
      text: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text,
      border: isDarkMode ? darkTheme.colors.border : lightTheme.colors.border,
      notification: isDarkMode
        ? darkTheme.colors.primary
        : lightTheme.colors.primary,
    },
    fonts: {
      regular: {
        fontFamily: 'System',
        fontWeight: 'normal' as const,
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500' as const,
      },
      bold: {
        fontFamily: 'System',
        fontWeight: 'bold' as const,
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '800' as const,
      },
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
