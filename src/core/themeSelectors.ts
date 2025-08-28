import { RootState } from './store';
import { lightTheme, darkTheme, Theme } from './theme';

export const selectCurrentTheme = (state: RootState): Theme => {
  return state.theme.isDarkMode ? darkTheme : lightTheme;
};

export const selectIsDarkMode = (state: RootState): boolean => {
  return state.theme.isDarkMode;
};
