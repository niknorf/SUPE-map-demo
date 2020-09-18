import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import table_data from '../data/bu_bd_new.json'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';
import grey_marker from '../img/grey.png'
import yellow_marker from '../img/yellow.png'
import orange_marker from '../img/orange.png'
import red_marker from '../img/red.png'

function createData(address, percent_probability, probability_type, report, status) {
  return { address, percent_probability, probability_type, report, status };
}

// const rows = [
//   createData('195276, г Санкт-Петербург, Калининский р-н, Суздальский пр-кт, д 57', 53, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, Суздальский пр-кт, д 67', 51, 'Бездоговорное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, ул Демьяна Бедного, д 24 к 4', 62, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Культуры, д 25 к 5', 67,'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Культуры, д 27 к 1', 11, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, пр-кт Культуры, д 29 к 2', 61, 'Бездоговорное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, ул Демьяна Бедного, д 28 к 1 литер а', 77, 'Бездоговорное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Просвещения, д 70 к 2', 52, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, ул Демьяна Бедного, д 22 к 4 литер а', 81, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Просвещения, д 68 к 2', 61, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Культуры, д 29 к 4', 81, 'Бездоговорное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, пр-кт Культуры, д 31 к 1', 52, 'Безучетное потребление', 'Добавить акт', 'Новое'),
//   createData('195276, г Санкт-Петербург, Калининский р-н, ул Демьяна Бедного, д 26 к 1', 54, 'Безучетное потребление', 'Добавить акт', 'Новое'),
// ];

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
  { id: 'address', numeric: false, disablePadding: true, label: 'Адрес' },
  { id: 'percent_probability', numeric: true, disablePadding: false, label: 'Вероятность' },
  { id: 'probability_type', numeric: false, disablePadding: false, label: 'Тип вероятности' },
  { id: 'report', numeric: false, disablePadding: false, label: 'Акт' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Статус задания' },
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
  },
  type: {
    fontSize: '11px',
    color: '#818E9B',
  },
  labelRowsPerPage: {

  },
  markerIcon:{
  width: 25,
  height: 25,
},
iconContainer:{
  display: 'flex',
  alignItems: 'center'
},
linkStyle:{
  color: '#4A9CFF'
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

  var rows = [];

  table_data.map((item) => {
  let percent_probability;
  let probability_type;

  if(item.percent_probability_BD === 0){
    percent_probability = item.percent_probability_BU;
    probability_type = 'БУ';
  }else{
    percent_probability = item.percent_probability_BD;
    probability_type = 'БД';
  }
      rows.push(createData(item.address, percent_probability, 'Безучетное потребление','Добавить акт', 'Новое'));

  });

  const defaultProps = {
    bgcolor: 'rgba(140, 148, 158, 0.1)',
    // borderColor: 'text.primary',
    // m: 1,
    // border: 0,
    style: { width: '6.9rem', height: '1.5rem', color: 'rgba(140, 148, 158, 1)' },
  };

  const theme = createMuiTheme({

  }, ruRU);

  return (
    <div className={classes.root}>
        <TableContainer id="balance-table">
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
                      key={row.address}
                    >
                      <TableCell component="th" scope="row" padding="none"  align="left">{row.address}<Box className={classes.type}>тип ГРЩ</Box></TableCell>
                      <TableCell align="center">{CreateIcon(classes, row.percent_probability)}</TableCell>
                      <TableCell align="center">{row.probability_type}</TableCell>
                      <TableCell align="center"> <Link underline="always" className={classes.linkStyle}>{row.report}</Link></TableCell>
                      <TableCell align="center"><Box borderRadius={5} {...defaultProps}>{row.status}</Box></TableCell>
                      {/* <TableCell align="center">{row.notTechnicalKwt}</TableCell> */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <ThemeProvider theme={theme}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </ThemeProvider>
    </div>
  );
}


const CreateIcon = (classes, number)=>{

let color = grey_marker;

if(parseInt(number) > 75){
  color = red_marker;
}else if (parseInt(number) > 50) {
  color = orange_marker;
}else if (parseInt(number) > 25) {
color = yellow_marker;
}else {
  color = grey_marker;
}

  return(<Container className={classes.iconContainer}>
    <Icon>
      <img className={classes.markerIcon} src={color}/>
      </Icon>
      <Typography>{number.toString() + '%'}</Typography>
</Container>);
}
