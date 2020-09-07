import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function createData(balanceGroup, imbalancePercent, imbalanceKwh, technicalPercent, technicalKwt, notTechnicalPecent, notTechnicalKwt) {
  return { balanceGroup, imbalancePercent, imbalanceKwh, technicalPercent, technicalKwt, notTechnicalPecent, notTechnicalKwt };
}

const rows = [
  createData(5, 64.2, 46786.05, 6.1, 'null', 'null', 'null'),
  createData(32, '-inf', '-22258.62', 1.6, 'null', 'null', 'null'),
  createData(3, -8.3, -3326.980000000003, 2,1, 'null', 'null', 'null'),
  createData(18, 107.7, -53102.63000000001, 3,2, 'null', 'null', 'null'),
  createData(10, -16284.3, -20062.3, 5, 'null', 'null', 'null'),
  createData(22, 100.0, 8257.4, 2.9, 'null', 'null', 'null'),
  createData(14, -20.7, 13426.439999999988, 3.6, 'null', 'null', 'null'),
  createData(28, -284.6, -10619.84, 3.2, 'null', 'null', 'null'),
  createData(0, 96.9, 1551018.3700000003, 3.8, 'null', 'null', 'null'),
  createData(1, 51.6, 27121.209999999995, 4.5, 'null', 'null', 'null'),
  createData(26, 97.5, 33132.9, 3.5, 'null', 'null', 'null'),
  createData(17, 19.1, 42612.649999999994, 2.4, 'null', 'null', 'null'),
  createData(9, 55.7, 68274.6, 5.1, 'null', 'null', 'null'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'balanceGroup', numeric: true, disablePadding: true, label: 'Балансовая группа' },
  { id: 'imbalancePercent', numeric: true, disablePadding: false, label: 'Небалансы (%)' },
  { id: 'imbalanceKwh', numeric: true, disablePadding: false, label: 'Небалансы (кВт)' },
  { id: 'technicalPercent', numeric: true, disablePadding: false, label: 'Технические (%)' },
  { id: 'technicalKwt', numeric: true, disablePadding: false, label: 'Технические (кВт)' },
  { id: 'notTechnicalPecent', numeric: true, disablePadding: false, label: 'Нетехнические потери (%)' },
  { id: 'notTechnicalKwt', numeric: true, disablePadding: false, label: 'Нетехнические потери (кВт)' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            className={classes.headCellStyle}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '0 15px'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  headCellStyle: {
    fontWeight: 'bold'
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  



  return (
    <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.balanceGroup}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        Балансовая группа № 
                        {row.balanceGroup}
                      </TableCell>
                      <TableCell align="right">{row.imbalancePercent}</TableCell>
                      <TableCell align="right">{row.imbalanceKwh}</TableCell>
                      <TableCell align="right">{row.technicalPercent}</TableCell>
                      <TableCell align="right">{row.technicalKwt}</TableCell>
                      <TableCell align="right">{row.notTechnicalPecent}</TableCell>
                      <TableCell align="right">{row.notTechnicalKwt}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  );
}
