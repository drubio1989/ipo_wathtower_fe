import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Title from '../components/Title';
import TopBar from '../components/AppBar';
import NavDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const mdTheme = createTheme();

export default function LastOneHundred() {
  const [lastOneHundred, setLastOneHundred] = useState(null);

  useEffect(() => {   
    async function getLast100() {
      const resp = await fetch("http://localhost:3000/api/v1/last-100-ipos")
      const objects = await (resp.json())
      setLastOneHundred(objects.data);
    }
    getLast100();
  }, [])

  if (lastOneHundred === null) {
    return <CircularProgress/>
  }

  const regex = /\/companies\/\D+/g;

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
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Title>Last 100 Ipos</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Offer Date</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Ticker</TableCell>
                    <TableCell>Industry</TableCell>
                    <TableCell>Shares</TableCell>
                    <TableCell>Offer Price</TableCell>
                    <TableCell>First Day Close Price</TableCell>
                    <TableCell>Current Price</TableCell>
                    <TableCell>Rate of Return</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lastOneHundred.map((ipo) => (
                    <TableRow key={ipo.id}>
                      <TableCell>{ipo.attributes.offer_date}</TableCell>
                      <TableCell>
                        <Link href={ipo.relationships.company.links.related.match(regex)}>{ipo.attributes.company}</Link>
                      </TableCell>
                      <TableCell>{ipo.attributes.ticker}</TableCell>
                      <TableCell>{ipo.attributes.industry}</TableCell>
                      <TableCell>{ipo.attributes.shares}</TableCell>
                      <TableCell>{ipo.attributes.offer_price}</TableCell>
                      <TableCell>{ipo.attributes.first_day_close_price}</TableCell>
                      <TableCell>{ipo.attributes.current_price}</TableCell>
                      <TableCell>{ipo.attributes.rate_of_return}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
