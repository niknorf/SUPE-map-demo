import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import data_map from './data_map.json';

const useStyles = makeStyles({
  table: {
    minWidth: 55,
  },
});

const headCells = [
{ id: 'address', numeric: false, disablePadding: true, label: 'Адрес' },
{ id: 'lat', numeric: true, disablePadding: false, label: 'Широта' },
{ id: 'lon', numeric: true, disablePadding: false, label: 'Долгота' },
{ id: 'date_period', numeric: true, disablePadding: false, label: 'Период прогнозирования' },
{ id: 'loss_probability', numeric: true, disablePadding: false, label: 'Вероятность нетехнических потерь (%)' },
{ id: 'type', numeric: false, disablePadding: false, label: 'Признак (БУ/БД)' },
{ id: 'comments', numeric: false, disablePadding: false, label: 'Коментарии' },
];


export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="sticky table">
        <TableHead >
          <TableRow>
            {/* <TableCell></TableCell> */}
            {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align='left'
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        // sortDirection={orderBy === headCell.id ? order : false}
                      >
                        <TableSortLabel
                          // active={orderBy === headCell.id}
                          // direction={orderBy === headCell.id ? order : 'asc'}
                          // onClick={createSortHandler(headCell.id)}
                        >
                          {headCell.label}
                          {/* {orderBy === headCell.id ? (
                            <span className={classes.visuallyHidden}>
                              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </span>
                          ) : null} */}
                        </TableSortLabel>
                      </TableCell>
                    ))}

          </TableRow>
        </TableHead>
        <TableBody>
          {data_map.map((row) => (
            <TableRow key={row.address}>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.lat}</TableCell>
              <TableCell align="left">{row.lon}</TableCell>
              <TableCell align="left">{row.date_period}</TableCell>
              <TableCell align="left">{row.loss_probability}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
