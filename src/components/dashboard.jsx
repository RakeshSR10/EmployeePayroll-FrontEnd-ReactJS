import React from "react";
import "../scss/dashboard.scss";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link, useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  logoutButton: {
    marginLeft: theme.spacing(120),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 10,
  },
}));

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleExitToAppOutlinedIcon = () => {
    localStorage.clear('token');
    history.push("/login");
  };

  return (
    <div className="root">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        data-testid="appBar"
      >
        <Toolbar className="toolbar" data-testid="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            data-testid="iconButton"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon  data-testid="menuIcon"/>
          </IconButton>
          <Typography variant="h6" data-testid="header">EMPLOYEE PAYROLL</Typography>
          <IconButton data-testid='exitToOut'
            onClick={handleExitToAppOutlinedIcon} 
            className={classes.logoutButton} 
            color="inherit">
                    Logout <ExitToAppOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        data-testid="drawer"
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} data-testid="drawerIconButton">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider data-testid="divider"/>
        <List>
          <ListItem
            button
            key="List"
            to="/dashboard/EmployeesList"
            data-testid="listElements"
            component={Link}
          >
            <ListItemIcon>{<ViewListIcon data-testid="listElementIcon"/>}</ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem
            button
            key="Add"
            to="/dashboard/addEmployee"
            component={Link}
          >
            <ListItemIcon>{<AddBoxIcon data-testid="addElementIcon"/>}</ListItemIcon>
            <ListItemText primary="Add" />
          </ListItem>
          <ListItem button key="Edit">
            <ListItemIcon>{<EditIcon data-testid="editElementIcon"/>}</ListItemIcon>
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem button key="Delete">
            <ListItemIcon>{<DeleteIcon data-testid="deleteElementIcon"/>}</ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}