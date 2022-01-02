import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../components/AppBar';
import NavDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const mdTheme = createTheme();

export default function Company() {
  const [company, setCompany] = useState(null);
  const [ipo, setIpo] = useState(null)

  useEffect(() => {   
    async function getCompany() {
      const resp = await fetch("http://localhost:3000/api/v1/companies/BNOX")
      const objects = await (resp.json());
      setCompany(objects.data);
      setIpo(objects.included[0]);
    }
    getCompany();
  }, [])

  if (company === null) {
    return <CircularProgress/>
  }

  if (ipo === null) {
    return <CircularProgress/>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                     General Information
                    </Typography>
                    <Typography variant="h6" component="div">
                      {company.attributes.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {company.attributes.description}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Industry: {company.attributes.industry}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Employees: {company.attributes.employees}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Founded: {company.attributes.founded}
                    </Typography>
                  </CardContent>
                </Card>
                <Toolbar />
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                      Contact Information
                    </Typography>
                    <Typography variant="h6" component="div">
                      Address: {company.attributes.address}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Phone Number: {company.attributes.phone_number}
                    </Typography>
                  </CardContent>
                </Card>
                <Toolbar />
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                      Financial Information
                    </Typography>
                    <Typography variant="h6" component="div">
                      Market Cap: {company.attributes.market_cap}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Revenue: {company.attributes.revenue}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Net Income: {company.attributes.net_income}
                    </Typography>
                  </CardContent>
                </Card>
                <Toolbar />
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                     Ipo Profile
                    </Typography>
                    <Typography variant="h6" component="div">
                      Symbol: {ipo.attributes.ticker}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Exchange: {ipo.attributes.exchange}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Shares: {ipo.attributes.shares}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Price Range: {ipo.attributes.price_range}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Estimated $ Volume: {ipo.attributes.estimated_volume}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Managers: {ipo.attributes.managers}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Co-Managers: {ipo.attributes.co_managers}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Expected To Trade {ipo.attributes.expected_to_trade}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Status: {ipo.attributes.status}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
