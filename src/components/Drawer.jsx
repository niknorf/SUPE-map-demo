import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { withRouter } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import SvgIcon from '@material-ui/core/SvgIcon';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import PFDinBoldWoff from "../fonts/PFDinTextCondPro-Bold.woff";

const pfdinBold = {
  fontFamily: 'PFDinTextCondPro-Bold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
    local('PFDinTextCondPro-Bold'),
    url(${PFDinBoldWoff}) format('woff')
    `,
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'PFDinTextCondPro-Bold !important',
    fontSize: 11,
    textTransform: 'uppercase'
  },
  typographyStyle: {
    color: "red"
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
          '@font-face': [pfdinBold],
      },
    },
  },
});

const useStyles = makeStyles({
  drawer: {
    width: "68px"
  },
  drawerPaper: {
    color: "#252F4A"
  },
  drawerList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    padding: 0,
    color: "#FFF",
  },
  listIcon: {
    color: "#FFF",
    justifyContent: 'center'
  },
  exit: {
    marginTop: 'auto'
  },
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Россети",
      icon: <SvgIcon><path width="20px"
      height="20px"
      fill="none" stroke="black" stroke-width="1" d="M 300.00,0.00
      C 300.00,0.00 300.00,337.00 300.00,337.00
        300.00,337.00 0.00,337.00 0.00,337.00
        0.00,337.00 0.00,0.00 0.00,0.00
        0.00,0.00 300.00,0.00 300.00,0.00 Z
      M 300.00,0.00
      C 300.00,0.00 300.00,338.00 300.00,338.00
        300.00,338.00 0.00,338.00 0.00,338.00
        0.00,338.00 0.00,0.00 0.00,0.00
        0.00,0.00 300.00,0.00 300.00,0.00 Z" /></SvgIcon>,
      onClick: () => history.push("/")
    },
    {
      text: "КАБИНЕТ",
      icon: <PermIdentityIcon />,
      onClick: () => history.push("/profile")
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <List className={classes.drawerList}>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick} className={classes.listItemContainer}>
                  {icon && <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
            <ListItem button className={ clsx(classes.listItemContainer, classes.exit)}>
              <ListItemIcon className={classes.listIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ВЫХОД" />
            </ListItem>
          </List>
      </ThemeProvider>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
