import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentTheme, selectIsDarkMode } from '../core/themeSelectors';
import { toggleTheme } from '../core/themeSlice';
import { Theme } from '../core/theme';

interface UseThemeReturn {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const theme = useSelector(selectCurrentTheme);
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return {
    theme,
    isDarkMode,
    toggleTheme: handleToggleTheme,
  };
};
