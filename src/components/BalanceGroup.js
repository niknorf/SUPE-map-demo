import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { Filter } from "react-feather";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SelectMaterial from "@material-ui/core/Select";
import PropTypes from "prop-types";
import clsx from "clsx";
import {GraphicGroup} from './Graphic'
import { InfoSection } from "./InfoSectionBG";
import { SelectComponent, SearchComponent } from "./FilterComponent";
import BalanceTable from "./BalanceTable";
import GeneralMap from "./MapBG";
import GlobalStateProvider from "../store/GlobalStateProvider";
import PFDinRegularWoff from "../fonts/PFDinTextCondPro-Regular.woff";


const drawerWidth = 100;

const pfdinRegular = {
  fontFamily: "PFDinTextCondPro-Regular",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
    local('PFDinTextCondPro-Regular'),
    url(${PFDinRegularWoff}) format('woff')
    `,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "PFDinTextCondPro-Regular !important",
  },
  typographyStyle: {
    color: "red",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [pfdinRegular],
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  fixedHeight: {
    height: 500,
  },
  container: {
    background: "#F5F6F8",
    paddingLeft: 40,
    paddingRight: 40,
    maxWidth: "1292px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  balanceLink: {
    fontSize: "14px",
    lineHeight: "17px",
    textDecoration: "underline",
    marginLeft: "16px",
    color: "#252F4A",
  },
  balanceText: {
    fontSize: "32px",
    lineHeight: "38px",
  },
  balanceGroupSelectors: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "24px",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
    marginBottom: "24px",
  },
  balaceGroupType: {
    marginLeft: "40px",
  },
  paperStyles: {
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)",
  },
  tableContainer: {
    paddingTop: "24px",
  },
  tableSortButton: {
    display: "flex",
    flexDirection: "row",
  },
  formControl: {
    width: "100%",
  },
  buttonFilter: {
    backgroundColor: "#4A9CFF",
    boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24);",
    borderRadius: "4px",
    marginLeft: "24px",
    letterSpacing: "0.01em;",
    fontWeight: "bold",
    textTransform: "none",
    padding: "0 28px",
  },
  adressInputTable: {
    display: "flex",
  },
  filterIcon: {
    width: "20px",
    height: "20px",
  },
}));

const BalanceGroup = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [sortItem, setSortItem] = useState("");
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSortItem(event.target.value);
  };

  return (
    <GlobalStateProvider>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <div className={classes.header}>
                <Typography
                  className={classes.balanceText}
                  variant="h2"
                  gutterBottom
                >
                  Балансовые группы
                </Typography>
                <Link href="#balance-table" className={classes.balanceLink}>
                  Посмотреть таблицу всех балансовых групп
                </Link>
              </div>
              <Grid>
                <Grid item xs={12}>
                  <Paper className={classes.balanceGroupSelectors}>
                    {/* SEARCH STREET COMPONENT */}
                    <Grid item xs={12} sm={6}>
                      <SearchComponent />
                    </Grid>
                    {/* SELECT COMPONENT */}
                    <Grid item xs={6} sm={3}>
                      <SelectComponent />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={3}
                      className={classes.balaceGroupType}
                    ></Grid>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                {/* MAP SECTION */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    className={clsx(fixedHeightPaper, classes.paperStyles)}
                  >
                    <GeneralMap />
                  </Paper>
                </Grid>
                {/* INFO SECTION */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    className={clsx(fixedHeightPaper, classes.paperStyles)}
                  >
                    <InfoSection />
                  </Paper>
                </Grid>
              </Grid>

              {/* GRAPHIC SECTION */}
              <GraphicGroup />


              <Grid container className={classes.tableContainer}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <FormControl
                          className={clsx(
                            classes.adressInputTable,
                            classes.textField
                          )}
                        >
                          <InputLabel htmlFor="standard-adornment-password">
                            Найти адрес
                          </InputLabel>
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
                          <InputLabel id="demo-simple-select-label">
                            Сортировать
                          </InputLabel>
                          <SelectMaterial
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortItem}
                            onChange={handleChange}
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
    </GlobalStateProvider>
  );
};

BalanceGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(BalanceGroup);
