import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from '../components/AppBar';
import NavDrawer from '../components/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const mdTheme = createTheme();

const MainLayout = () => {
  return(
    <ThemeProvider theme={mdTheme}>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <NavDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default MainLayout;
