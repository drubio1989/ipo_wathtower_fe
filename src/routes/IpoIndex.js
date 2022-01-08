import { useState, useEffect } from 'react';
import TopBar from '../components/AppBar';
import NavDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from '../components/Title';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useLocation } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';

const mdTheme = createTheme();

const IpoIndex = () => {
  const [companies, setCompanies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {   
    async function getCompanies() {
      const resp = await fetch(`http://localhost:3000/api/v1/ipo-index?${searchParams}`);
      const objects = await (resp.json());
      setCompanies(objects.data);
    }
    getCompanies();
  }, [])

  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const regex = /\/companies\/\D+/g; 

  if (companies === null) {
    return <CircularProgress/>
  }

  const goToCompanyLetter = (letter) => {
    let params = {};
    params.filter = letter;
    setSearchParams(params, { replace: true });
  }
  
  return (
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
          <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Box
              display="flex"   
              sx={{ justifyContent: 'center', width: 500 }}

            >
              {alphabet.map((letter) => (
                <Box sx={{ justifyContent: 'center' }}>
                  <ListItemButton onClick={() => goToCompanyLetter(letter)} component="a" href={`/ipo-index/?filter=${letter}`}>
                    <ListItemText primary={letter}></ListItemText>
                  </ListItemButton>
                </Box>
              ))}
            </Box>
          </Container>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Title>Company Index</Title>
                {companies.map((company) => (
                  <ListItemButton component="a" href={company.links.self.match(regex)}>
                      <ListItemText primary={company.attributes.name}>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default IpoIndex;
