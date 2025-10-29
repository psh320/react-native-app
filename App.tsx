import React from 'react';
import { useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider, useSelector } from 'react-redux';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/core/store';
import { selectThemeMode } from './src/core/themeSlice';
import RootNavigator from './src/navigation/RootNavigator';

// Enable react-native-screens for better performance
enableScreens();

const AppContent = () => {
  const systemColorScheme = useColorScheme();
  const themeMode = useSelector(selectThemeMode);

  const isDarkMode =
    themeMode === 'auto' ? systemColorScheme === 'dark' : themeMode === 'dark';

  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
