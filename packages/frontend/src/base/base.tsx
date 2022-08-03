import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Nav from '../nav';
import { theme } from '../theme';

export default function Base() {
  return (
    <>
      <ThemeProvider theme={theme('dark')}>
        <Nav />
        <Outlet />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
