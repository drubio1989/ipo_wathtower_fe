import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemText from '@mui/material/ListItemText';
import PageviewIcon from '@mui/icons-material/Pageview';
import MoneyIcon from '@mui/icons-material/Money';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimelineIcon from '@mui/icons-material/Timeline';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ListIcon from '@mui/icons-material/List';

const NavMenu = () => {
  return(
      <div>
         <ListItemButton component="a" href='/'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard">
          </ListItemText>
        </ListItemButton>

        <ListItemButton component="a" href='/ipos-recently-filed'>
          <ListItemIcon>
            <PageviewIcon />
          </ListItemIcon>
          <ListItemText primary="Recently Filed Ipos">
          </ListItemText>
        </ListItemButton>

        <ListItemButton component="a" href='/last-100-ipos'>
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Last 100 Ipos" />
        </ListItemButton>

        <ListItemButton component="a" href='/last-12-months'>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary="Last 12 Months" />
        </ListItemButton>

        <ListItemButton component="a" href='/current-year-pricings'>
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Current Year Pricings" />
        </ListItemButton>

        <ListItemButton component="a" href='/ipo-calendar'>
          <ListItemIcon>
            <CalendarViewMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Ipo Calendar" />
        </ListItemButton>

        <ListItemButton component="a" href='/ipo-index'>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Ipo Index" />
        </ListItemButton>
      </div>
  )
};


export default NavMenu;
