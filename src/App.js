import React from "react";
import "./styles.css";
import Login from './components/Login';
import BalanceGroup from "./components/BalanceGroup";
import Home from './components/Home';
import GlobalStateProvider from "./store/GlobalStateProvider";
//import Profile from "./components/Profile";
import Profile from "./components/ProfileNoAuth";
import BuBd from './components/BuBd';
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import PFDinRegularWoff from "./fonts/PFDinTextCondPro-Regular.woff";


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

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <GlobalStateProvider>
    <div className={classes.container}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer />
        <Switch>
          <Route exact from="/home" render={props => <Home {...props} />} />
          <Route exact from="/" render={props => <Login {...props} />} />
          <Route exact from="/balancegroup" render={props => <BalanceGroup {...props} />} />
          <Route exact path="/profile" render={props => <Profile {...props} />} />
          <Route exact path="/bubd" render={props => <BuBd {...props} />} />
        </Switch>
    </ThemeProvider>

    </div>
  </GlobalStateProvider>
  );
}
