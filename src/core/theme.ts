const shared = {
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold' as const,
    },
    body: {
      fontSize: 16,
    },
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007bff',
    secondary: '#6c757d',
    card: '#F8F9FA',
    border: '#DEE2E6',
  },
};

export const darkTheme = {
  ...shared,
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#007bff',
    secondary: '#adb5bd',
    card: '#1E1E1E',
    border: '#495057',
  },
};

export type Theme = typeof lightTheme;
