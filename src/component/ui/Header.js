import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const {
  Typography,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Button,
} = require("@material-ui/core");

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".5em",
    },
  },

  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainor: {
    marginLeft: "auto",
    marginRight:"20px"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
    "&:hover":{
      color:"#000000",
      textDecoration:"none"
    }
  },
  button: {
    borderRadius: 50,
    marginLeft: "50px",
    marginRight: "25px",
    textTransform: "none",
    fontFamily: "Pacifico",
    color: "white",
    height: "33px",
    marginTop: "8px",
  },
  menu: {
    backgroundColor: theme.palette.common.white,
    color: "black",
    borderRadius: "0px",
  },
  menuitem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      color:"#000000"
    },
  },
  iconDrawerContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "40px",
  },
  drawer: {
    backgroundColor: theme.palette.common.white,
    color:"#000000"
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    color: "#000000",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  indicatorCss:{
    backgroundColor:theme.palette.common.orange
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
    setOpenMenu(false);
  };

  const handleMenuOption = (event, i) => {
    setSelected(i);
    setOpenMenu(false);
    setAnchorEl(false);
  };

  const menuoptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Development",
      link: "/custom",
      activeIndex: 1,
      selectedIndex: 1,
    },
    { name: "Web Development", link: "/web", activeIndex: 1, selectedIndex: 2 },
    {
      name: "Mobile Development",
      link: "/mobile",
      activeIndex: 1,
      selectedIndex: 3,
    },
    { name: "AI Vertulity", link: "/ai", activeIndex: 1, selectedIndex: 4 },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
      areaOwns: null,
      hasPopup: null,
      mouseOver: null,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      areaOwns: anchorEl ? "simple-menu" : undefined,
      hasPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "Forcast",
      link: "/forcast",
      activeIndex: 2,
      areaOwns: null,
      hasPopup: null,
      mouseOver: null,
    },
    
    {
      name: "About",
      link: "/about",
      activeIndex: 3,
      areaOwns: null,
      hasPopup: null,
      mouseOver: null,
    },
    {
      name: "Contact",
      link: "/contact",
      activeIndex: 4,
      areaOwns: null,
      hasPopup: null,
      mouseOver: null,
    },
    {
        name: "Blog",
        link: "/blog",
        activeIndex: 5,
        areaOwns: null,
        hasPopup: null,
        mouseOver: null,
      },
    
  ];
  useEffect(() => {
    [...menuoptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selected) {
              setSelected(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
    console.log(value);
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainor}
        classes = {{indicator:classes.indicatorCss}}
      >
        {routes.map((route, index) => (
          <Tab
            area-owns={route.areaOwns}
            area-haspop={route.hasPopup}
            onMouseOver={route.mouseOver}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
          />
        ))}
        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          component={Link}
          to="/estimate"
        >
          Free Estimate
        </Button> */}
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 4}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconDrawerContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="white">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} src={logo} alt="company-logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
