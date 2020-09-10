import React from "react";
import "./styles.css";
import BalanceGroup from "./components/BalanceGroup";
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
    <div className={classes.container}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer />
        <Switch>
          <Route exact from="/" render={props => <BalanceGroup {...props} />} />
          <Route exact path="/profile" render={props => <Profile {...props} />} />
          <Route exact path="/bubd" render={props => <BuBd {...props} />} />
        </Switch>
    </ThemeProvider>
      
    </div>
  );
}
