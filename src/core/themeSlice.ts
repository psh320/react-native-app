import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'auto',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

// Selector
export const selectThemeMode = (state: RootState): ThemeMode =>
  state.theme.mode;

export default themeSlice.reducer;
