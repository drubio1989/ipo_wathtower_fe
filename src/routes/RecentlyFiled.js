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

export default function RecentlyFiled() {
  const [recentlyFiled, setRecentlyFiled] = useState(null);
 
  useEffect(() => {
    async function getRecentlyFiled() {
      const resp = await fetch("http://localhost:3000/api/v1/ipos-recently-filed")
      const objects = await (resp.json())
      setRecentlyFiled(objects.data);
    }
    getRecentlyFiled();
  }, [])

  if (recentlyFiled === null) {
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
            <Title>Recently Filed</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>File Date</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>Ticker</TableCell>
                  <TableCell>Managers</TableCell>
                  <TableCell>Shares</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Estimated Volume</TableCell>
                  <TableCell>Expected to Trade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentlyFiled.map((ipo) => (
                  <TableRow key={ipo.id}>
                    <TableCell>{ipo.attributes.file_date}</TableCell>
                    <TableCell>
                      <Link href={ipo.relationships.company.links.related.match(regex)}>{ipo.attributes.company}</Link>
                    </TableCell>
                    <TableCell>{ipo.attributes.ticker}</TableCell>
                    <TableCell>{ipo.attributes.managers}</TableCell>
                    <TableCell>{ipo.attributes.shares}</TableCell>
                    <TableCell>{ipo.attributes.price_low}</TableCell>
                    <TableCell>{ipo.attributes.price_high}</TableCell>
                    <TableCell>{ipo.attributes.estimated_volume}</TableCell>
                    <TableCell>{ipo.attributes.expected_to_trade}</TableCell>
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
