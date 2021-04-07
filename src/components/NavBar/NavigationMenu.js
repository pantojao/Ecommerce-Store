import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  List,
  Collapse,
  ClickAwayListener,
} from "@material-ui/core";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useStyles } from "./NavBarStyles";
import {Link} from 'react-router-dom'
import { Menu as MenuIcon } from "@material-ui/icons";

const NavigationMenu = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [openGenres, setOpenGenres] = useState(false);
  const classes = useStyles();

  const handleOpen = (event) => setAnchorElement(event.currentTarget);
  const handleClose = () => setAnchorElement(null);

  const handleClickAway = () => {
    if (openGenres) setOpenGenres(false);
  };



  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        size="large"
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      <Menu
        id="simple-menu"
        className={classes.menu}
        anchorEl={anchorElement}
        onClose={handleClose}
        open={Boolean(anchorElement)}
        keepMounted
      >

        <MenuItem>
          <Link to='/' className={classes.linkStyle} >Home</Link>
        </MenuItem>

        <ClickAwayListener>
          <MenuItem onClick={() => setOpenGenres(!openGenres)}>
            <Typography>
              Genres
            </Typography>
            {openGenres ? <ArrowLeftIcon /> : <ArrowRightIcon />}

            <Collapse
              component="li"
              in={openGenres}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding >
                <ListItem className={classes.nested}>
                  <Link to='computer-science' className={classes.linkStyle}>Computer Science</Link>
                </ListItem>
                <ListItem className={classes.nested}>
                  <Link to='/finance' className={classes.linkStyle}>Finance</Link>
                </ListItem>
              </List>
              
            </Collapse> 
          </MenuItem>
        </ClickAwayListener>

        <MenuItem>
          <Link to='about-us' className={classes.linkStyle} >
             About Us
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavigationMenu;
