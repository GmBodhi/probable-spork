import { createTheme } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
    },
    ...(mode === 'dark' ? darkTheme : lightTheme),
  });
