import App from '../App';
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function RecentlyFiled() {
  return (
    <React.Fragment>
       <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recently Filed Ipos
      </Typography>
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
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
