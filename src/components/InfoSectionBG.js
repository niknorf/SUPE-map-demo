import { Typography, Container, Paper,TablePagination, TableFooter, Icon, TableRow, TableHead,IconButton, TableContainer, TableCell, Table, TableBody } from "@material-ui/core";
import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Contex from "../store/context";
import { makeStyles, useTheme } from '@material-ui/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import info_icon from '../img/info_icon.svg';
import triangle_icon from '../img/triangle_icon.svg';
import balance_group_items from '../data/balance_result_full.json'

const useStyles = makeStyles({
  imageIcon: {
    // height: '100%'
    width: 40,
    height: 40
  },
  iconRoot: {
    textAlign: 'center',
  },
  table: {
  minWidth: 150,
},
root: {
  flexShrink: 0,
  // marginLeft: theme.spacing(2.5),
},
});

const useStyles2 = makeStyles({
  table: {
    minWidth: 150,
    borderBottom: "none"
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


const InitialState = () => {
const classes = useStyles();
  return (
      <Container>
        <Typography>
          Балансовая группа
        </Typography>
        <Icon classes={{root: classes.iconRoot}}>
          <img className={classes.imageIcon} src={info_icon}/>
        </Icon>
        <Typography>
          Чтобы посмотреть балансовую группу, выберите обьект на карте или воспользуйтесь поиском или фильтрацией
        </Typography>


      </Container>
  );
};

const Data_not_found = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography>
        Балансовая группа
      </Typography>
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src={triangle_icon}/>
      </Icon>
      <Typography>
       Не удалось загрузить данные для текущего объта
      </Typography>


    </Container>
  );
};
const WarningState = ({label}) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography>
        Балансовая группа
      </Typography>
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src={triangle_icon}/>
      </Icon>
      <Typography>
       {label}
      </Typography>


    </Container>
  );
};

const NotInPsk = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography>
        Балансовая группа
      </Typography>
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src={triangle_icon}/>
      </Icon>
      <Typography>
      В базе данных сбытовой компании не содержится информация о выбранном объекте
      </Typography>


    </Container>
  );
};

function createData(name, type) {
  return { name, type};
}

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}


const ShowDataState = () => {
const classes = useStyles();
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);
const { state, globalState } = useContext(Contex);


const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

const balance_id = globalState.balance_index;

const address_name = "(" + globalState.building_address + ")";

var rows = [];

balance_group_items.map((item)=>{

if(item.balance_index.toString() == balance_id){
rows.push(createData(item.name, item.type))
}
});

const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
console.log(globalState);

  return (
    <Typography>
      <Container>
        Балансовая группа №{balance_id} {address_name}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Назвавание</TableCell>
                <TableCell align="right">Тип</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  : rows
).map((row) => (
  <TableRow key={row.name}>
    <TableCell>
      {row.name}
    </TableCell>
    <TableCell align="right">
      {row.type}
    </TableCell>
    </TableRow>
))}
{emptyRows > 0 && (
  <TableRow style={{ height: 53 * emptyRows }}>
    <TableCell colSpan={6} />
  </TableRow>
)}
            </TableBody>
            <TableFooter>
  <TableRow>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
      colSpan={3}
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  </TableRow>
</TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </Typography>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const InfoSection = () => {
  const { state, globalState } = useContext(Contex);
  return (
    // TODO check the logic it doesnt work correctly
    <Container>
      {(() =>
        {
          if (globalState.isPhantomic){
            return <WarningState label="Не удалось определить балансовую группу для выбранного обьекта" />;
          }else if(globalState.isClean === 'balance_id_not_found'){
             return <WarningState label= "balance_id_not_found"/>;
          }else if(globalState.isClean == false && globalState.balance_index !== ''){
            return <NotInPsk />;
          }if(globalState.isClean == true && globalState.balance_index !== ''){
            return <ShowDataState />;
          }
          else{
            return <InitialState />;
          }

        }
      //   {
      //   if (!globalState.bi_value) {
      //     return <InitialState />;
      //   } else if (globalState.isPhantomic && !globalState.is_in_psk) {
      //     return <NotInPsk />;
      //   }else if(globalState.isPhantomic){
      //     return <WarningState />;
      //
      //   }else if(globalState.data_for_item_not_found){
      //     return <Data_not_found/>
      //   }else if(!globalState.isClean){
      //     return <NotInPsk />;
      //   } else {
      //     return <ShowDataState />;
      //   }
      // }
    )()}
    </Container>
  );
};

export { InfoSection };
