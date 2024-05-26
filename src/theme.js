import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff1744', // Red
    },
    secondary: {
      main: '#64ffda', // Teal
    },
    background: {
      default: '#121212', // Dark grey
      paper: '#212121', // Darker grey
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#bdbdbd', // Light grey
    },
    divider: '#616161', // Medium grey
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default theme;
