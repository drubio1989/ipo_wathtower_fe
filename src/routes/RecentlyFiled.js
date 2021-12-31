import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Title from '../components/Title';

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

  return (
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
                    <TableCell>{ipo.attributes.company}</TableCell>
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
  );
}
