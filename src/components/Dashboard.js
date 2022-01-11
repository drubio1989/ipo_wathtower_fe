import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [currentYearPricings, setCurrentYearPricings] = useState(null);

  useEffect(() => {   
    async function getCurrentYearPricings() {
      const resp = await fetch("http://localhost:3000/api/v1/current-year-pricings")
      const objects = await (resp.json())
      setCurrentYearPricings(objects.data);
    }
    getCurrentYearPricings();
  }, [])

  return(
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
