import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from 'react';
import moment from 'moment'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import TopBar from '../components/AppBar';
import NavDrawer from '../components/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const mdTheme = createTheme();

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const IpoCalendar = props => {
  const [ipos, setIpos] = useState(null);
 
  useEffect(() => {
    async function getIpoCalendar() {
      const resp = await fetch("http://localhost:3000/api/v1/ipo-calendar");
      const objects = await (resp.json())
      setIpos(objects.data);
    }
    getIpoCalendar();
  }, [])

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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Calendar
              localizer={localizer}
              events={[
                {
                  start: moment().toDate(),
                  end: moment()
                    .add(1, "days")
                    .toDate(),
                  title: "AMLX"
                }
              ]}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 1000, width: 1000 }}
            />
          </Grid>
         </Container>
      </Box>
    </Box>
  </ThemeProvider>
  )
}

export default IpoCalendar;
