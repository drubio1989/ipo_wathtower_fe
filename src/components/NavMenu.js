import * as React from 'react';
import { Link, Router } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PageviewIcon from '@mui/icons-material/Pageview';
import MoneyIcon from '@mui/icons-material/Money';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimelineIcon from '@mui/icons-material/Timeline';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ListIcon from '@mui/icons-material/List';

export const NavMenu = () => {
  return(
      <div>
        <ListItemButton component="a" href='/ipos-recently-filed'>
          <ListItemIcon>
            <PageviewIcon />
          </ListItemIcon>
          <ListItemText primary="Recently Filed Ipos">
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={'/ipo-recently-filed'}
              key={1}
            >
              "Hello World"
            </Link>
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
