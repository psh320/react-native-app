import { useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme as usePaperTheme } from 'react-native-paper';
import { selectThemeMode, setThemeMode, ThemeMode } from '../core/themeSlice';

export const useTheme = () => {
  const systemColorScheme = useColorScheme();
  const themeMode = useSelector(selectThemeMode);
  const paperTheme = usePaperTheme();
  const dispatch = useDispatch();

  const isDarkMode =
    themeMode === 'auto' ? systemColorScheme === 'dark' : themeMode === 'dark';

  const handleSetThemeMode = (mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  return {
    theme: paperTheme,
    themeMode,
    isDarkMode,
    setThemeMode: handleSetThemeMode,
  };
};
