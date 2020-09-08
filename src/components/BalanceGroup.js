import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { GeneralMap } from './Map2';
import { GraphicGroup } from './Graphic';
import { positions, typography } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './SidebarList';
import FilterGroup from './FilterGroup';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PFDinRegularWoff from "../fonts/PFDinTextCondPro-Regular.woff";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
// import Select from 'react-select';
import MenuItem from '@material-ui/core/MenuItem';
import { Filter } from 'react-feather';
import Button from '@material-ui/core/Button';
import SelectMaterial from '@material-ui/core/Select';
import BalanceTable from './BalanceTable';
import street_list from '../data/street_list.json';
import ts_list from '../data/ts_balance_list.json';
import { ImbalancePskPu } from './charts/ImbalancePskPu';
//import '../style.css';

const drawerWidth = 100;

const pfdinRegular = {
  fontFamily: 'PFDinTextCondPro-Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
    local('PFDinTextCondPro-Regular'),
    url(${PFDinRegularWoff}) format('woff')
    `,
}

const ts_select = {
  label: 'Трансформаторная подстанция',
  help_text: 'Выберете из списка',
  menu_items: ts_list,
  keys_list: Object.keys(ts_list)
}
const address_search = {
  label: '',
  help_text: 'Найти адрес',
  menu_items: street_list.street_list
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'PFDinTextCondPro-Regular !important',
  },
  typographyStyle: {
    color: "red"
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [pfdinRegular],
      },
    },
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  menuListItems: {
    position: "absolute",
    bottom: 0,
    alignSelf: 'center'
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    background: '#F5F6F8',
    paddingTop: '40px'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"

  },
  fixedHeight: {
    height: 500,
  },
  container: {
    background: "#F5F6F8",
    paddingLeft: 40,
    paddingRight: 40,
    maxWidth: '1292px',
  },
  drawerPaper: {
    background: "#252F4A",
    width: "68px"
  },
  listText: {
    color: "red"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline"
  },
  balanceLink: {
    fontSize: "14px",
    lineHeight: "17px",
    textDecoration: "underline",
    marginLeft: "16px",
    color: "#252F4A"
  },
  balanceText: {
    fontSize: "32px",
    lineHeight: "38px"
  },
  balanceGroupSelectors: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "24px",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
    marginBottom: "24px"
  },
  adressInput: {
    display: "flex",
    marginRight: "32px"
  },
  balaceGroupType: {
    marginLeft: "40px"
  },
  selectTopText: {
    fontSize: "11px",
    lineHeight: "13px",
    letterSpacing: "0.01em",
    color: "#818E9B",
    paddingBottom: "11px"
  },
  selectContainer: {
    paddingBottom: "24px"
  },
  paperStyles: {
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"
  },
  tableContainer: {
    paddingTop: "24px"
  },
  tableSortButton: {
    display: "flex",
    flexDirection: "row"
  },
  formControl: {
    width: "100%"
  },
  buttonFilter: {
    backgroundColor: "#4A9CFF",
    boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24);",
    borderRadius: "4px",
    marginLeft: "24px",
    letterSpacing: "0.01em;",
    fontWeight: "bold",
    textTransform: "none",
    padding: "0 28px"
  },
  adressInputTable: {
    display: "flex"
  },
  filterIcon: {
    width: "20px",
    height: "20px"
  }
});

class FilterOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  state = {
    value: "empty"
  }

  handleFilterTextChange(e, value) {
    if (value.props !== null && typeof value.props.balance_group_list !== 'undefined') {
      if(typeof value.props === 'object'){
        /*TODO actually show both currently shows the first from the list*/
          this.props.onFilterTextChange(value.props.balance_group_list[0]);
      }else{
          this.props.onFilterTextChange(value.props.balance_group_list);
      }
    }else{
      this.props.onFilterTextChange('');
    }
    this.setState({value: e.target.value});
  }


  render() {
    return (<div>
      <InputLabel id="demo-simple-select-placeholder-label-label">
        {ts_select.label}
      </InputLabel>
      <Select value={this.state.value} onChange={this.handleFilterTextChange} style={{ width: 300}}>
        <MenuItem value="empty">{ts_select.help_text}</MenuItem>
        {
          // ts_select.menu_items.forEach()
        }
        {ts_select.keys_list.map((item, index) => <MenuItem  balance_group_list={null} key={item} value={item}>{item}</MenuItem>)}
      </Select>
    </div>);
  }

}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e, value) {
    if (value !== null) {
      this.props.onFilterTextChange(value.balance_index);
    }else{
      this.props.onFilterTextChange('');
    }
  }

  render() {
    return (<div>
      <FormControl>
        <Autocomplete id="street_search"  options={address_search.menu_items} getOptionLabel={(option) => option.name} style={{
            width: 300
          }} onChange={this.handleFilterTextChange} renderInput={(params) => <TextField {...params} label={address_search.help_text} margin="normal" endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon style={{ color: "#4A9CFF" }} />
              </IconButton>
            </InputAdornment>
          }/>}/>
      </FormControl>

    </div>);
  }

}


class  BalanceGroup extends React.Component {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  constructor(props) {
    super(props);
    this.state = {
        sortItem:'',
        filterText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
}

handleChange(event) {
  this.setState({sortItem: event.target.value});
}

handleFilterTextChange(filterText) {
  this.setState({filterText: filterText});
}


  //
  // const [sortItem, setSortItem] = React.useState('');
  //
  // const handleChange = (event) => {
  //   setSortItem(event.target.value);
  // };
render(){

  const {classes} =  this.props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar> */}
      {/* what was drawer */}
      {/* <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open='false'
          >
          <ThemeProvider theme={theme}>
          <CssBaseline />

            <List>
              {mainListItems}
            </List>
            <List className={classes.menuListItems}>
              {secondaryListItems}
            </List>
            </ThemeProvider>
          </Drawer> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <div className={classes.header}>
              <Typography className={classes.balanceText} variant="h2" gutterBottom>Балансовые группы</Typography>
              <Link href="#balance-table" className={classes.balanceLink}>Посмотреть таблицу всех балансовых групп</Link>
            </div>
            <Grid container
              // className={classes.selectContainer}
              >
              <Grid item xs={12}>
                <Paper className={classes.balanceGroupSelectors}>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={clsx(classes.adressInput, classes.textField)}>
                      <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>
                      {/* <InputLabel htmlFor="standard-adornment-password">Найти адрес</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        value=""
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <SearchIcon style={{ color: "#4A9CFF" }} />
                            </IconButton>
                          </InputAdornment>
                        }
                      /> */}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    {/* <Typography className={classes.selectTopText}>Трансформаторная подстанция</Typography>
                    <Select options={options} placeholder='Выберете из списка' /> */}
                    <FilterOptions filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>

                  </Grid>
                  <Grid item xs={6} sm={3} className={classes.balaceGroupType}>

                    {/* <Typography className={classes.selectTopText}>Тип балансовой группы</Typography>
                    <Select options={options} placeholder='Выберете из списка' /> */}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={clsx(fixedHeightPaper, classes.paperStyles)}>
                  <GeneralMap onFilterTextChange={this.handleFilterTextChange} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={clsx(fixedHeightPaper, classes.paperStyles)}>
                  {/* <Typography variant="h1">
                    Балансовые группы
                    </Typography> */}
                  {/* <FilterGroup label={filter1.label} menu_items={filter1.menu_items} />
                  <FilterGroup label={filter2.label} menu_items={filter2.menu_items} />
                  <GraphicGroup name={graphic1.name} x_coordinates={graphic1.x} y_coordinates={graphic1.y} type={graphic1.type} /> */}
                  <ImbalancePskPu filterText={this.state.filterText} key={1}/>
                </Paper>
              </Grid>
              {/* <Grid item xs={12} >
                <Paper className={classes.paper}> */}
                  <GraphicGroup filterText={this.state.filterText} key={1}/>
                  {/* <GraphicGroup name={graphic2.name} x_coordinates={graphic2.x} y_coordinates={graphic2.y} type={graphic2.type} /> */}
                  {/* <GraphicGroup name={graphic3.name} x_coordinates={graphic3.x} y_coordinates={graphic3.y} type={graphic3.type} /> */}
                {/* </Paper>
              </Grid> */}
              {/* <Grid item xs={12}>
                <Paper className={classes.paper}> */}
                  {/* <GraphicGroup name={graphic4.name} x_coordinates={graphic4.x} y_coordinates={graphic4.y} type={graphic4.type} /> */}
                {/* </Paper>
              </Grid> */}
            </Grid>

            <Grid container className={classes.tableContainer}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <FormControl className={clsx(classes.adressInputTable, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Найти адрес</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          value=""
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton>
                                <SearchIcon style={{ color: "#4A9CFF" }} />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs className={classes.tableSortButton}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
                          <SelectMaterial
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.sortItem}
                            onChange={this.handleChange}
                          >
                            <MenuItem value={10}>По номеру группы</MenuItem>
                          </SelectMaterial>
                        </FormControl>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonFilter}
                        endIcon={<Filter className={classes.filterIcon} />}
                      >
                        Фильтры
                      </Button>
                    </Grid>
                    <BalanceTable />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

}


// function BalanceGroup(props) {
//   const { classes } = props;
//   return <Button className={classes.root}>Higher-order component</Button>;
// }

BalanceGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BalanceGroup);
